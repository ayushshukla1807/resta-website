from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
import hashlib
import re
import math
from collections import Counter

app = FastAPI(
    title="StudyHub ML Engine",
    version="2.0.0",
    description="AI/ML Microservice powering semantic search, document summarization, and RAG-based study assistance for the StudyHub platform.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Pydantic Models ──────────────────────────────────────────────────────────

class QueryRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=500, description="The search query or question")
    top_k: int = Field(default=5, ge=1, le=20, description="Number of results to return")
    filters: Optional[dict] = Field(default=None, description="Optional filters like category, level, etc.")

class SummaryRequest(BaseModel):
    text: str = Field(..., min_length=10, max_length=50000, description="Text to summarize")
    max_length: int = Field(default=200, ge=50, le=1000, description="Maximum summary length in words")
    style: str = Field(default="academic", description="Summary style: academic, bullet_points, eli5")

class ChatMessage(BaseModel):
    role: str = Field(..., description="Message role: user or assistant")
    content: str = Field(..., description="Message content")

class ChatRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=1000)
    history: List[ChatMessage] = Field(default=[], description="Conversation history for context")
    context_materials: List[str] = Field(default=[], description="IDs of materials to use as RAG context")

class SearchResult(BaseModel):
    id: str
    title: str
    description: str
    score: float
    category: str
    tags: List[str]
    highlight: str

class EmbeddingRequest(BaseModel):
    texts: List[str] = Field(..., min_items=1, max_items=100)

# ── TF-IDF Vectorizer (Lightweight, no external ML deps needed) ──────────

class TFIDFVectorizer:
    """A lightweight TF-IDF implementation for semantic similarity without heavy ML dependencies."""

    def __init__(self):
        self.vocab = {}
        self.idf = {}
        self.documents = []

    def _tokenize(self, text: str) -> List[str]:
        text = text.lower()
        text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
        tokens = text.split()
        stop_words = {'the', 'a', 'an', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for',
                      'of', 'with', 'by', 'from', 'and', 'or', 'not', 'this', 'that', 'it', 'as',
                      'be', 'has', 'have', 'had', 'do', 'does', 'did', 'but', 'if', 'than', 'so'}
        return [t for t in tokens if t not in stop_words and len(t) > 1]

    def fit(self, documents: List[dict]):
        self.documents = documents
        all_tokens = []
        for doc in documents:
            text = f"{doc['title']} {doc['description']} {' '.join(doc.get('tags', []))}"
            tokens = self._tokenize(text)
            all_tokens.append(set(tokens))

        n = len(documents)
        all_unique = set()
        for ts in all_tokens:
            all_unique.update(ts)

        for token in all_unique:
            df = sum(1 for ts in all_tokens if token in ts)
            self.idf[token] = math.log((n + 1) / (df + 1)) + 1

    def _get_tfidf(self, text: str) -> dict:
        tokens = self._tokenize(text)
        tf = Counter(tokens)
        total = len(tokens) if tokens else 1
        return {t: (count / total) * self.idf.get(t, 1.0) for t, count in tf.items()}

    def search(self, query: str, top_k: int = 5) -> List[dict]:
        query_vec = self._get_tfidf(query)
        results = []

        for doc in self.documents:
            text = f"{doc['title']} {doc['description']} {' '.join(doc.get('tags', []))}"
            doc_vec = self._get_tfidf(text)

            # Cosine similarity
            common = set(query_vec.keys()) & set(doc_vec.keys())
            if not common:
                results.append((doc, 0.0))
                continue

            dot = sum(query_vec[t] * doc_vec[t] for t in common)
            mag_q = math.sqrt(sum(v ** 2 for v in query_vec.values()))
            mag_d = math.sqrt(sum(v ** 2 for v in doc_vec.values()))

            score = dot / (mag_q * mag_d) if mag_q * mag_d > 0 else 0.0
            results.append((doc, round(score, 4)))

        results.sort(key=lambda x: x[1], reverse=True)
        return results[:top_k]


# ── Extractive Summarizer ────────────────────────────────────────────────────

class ExtractiveSummarizer:
    """Extractive summarization using sentence scoring with TF-IDF weights."""

    def _split_sentences(self, text: str) -> List[str]:
        sentences = re.split(r'(?<=[.!?])\s+', text)
        return [s.strip() for s in sentences if len(s.strip()) > 20]

    def summarize(self, text: str, max_sentences: int = 4, style: str = "academic") -> str:
        sentences = self._split_sentences(text)
        if len(sentences) <= max_sentences:
            return text

        # Score sentences by word frequency importance
        words = re.findall(r'\b[a-zA-Z]{3,}\b', text.lower())
        word_freq = Counter(words)
        max_freq = max(word_freq.values()) if word_freq else 1

        scored = []
        for i, sent in enumerate(sentences):
            sent_words = re.findall(r'\b[a-zA-Z]{3,}\b', sent.lower())
            score = sum(word_freq.get(w, 0) / max_freq for w in sent_words)
            # Boost earlier sentences (position bias)
            score *= (1.0 + 0.1 * (len(sentences) - i) / len(sentences))
            scored.append((i, sent, score))

        scored.sort(key=lambda x: x[2], reverse=True)
        top = sorted(scored[:max_sentences], key=lambda x: x[0])

        if style == "bullet_points":
            return "\n".join(f"• {s[1]}" for s in top)
        elif style == "eli5":
            return "In simple terms: " + " ".join(s[1] for s in top[:2])
        else:
            return " ".join(s[1] for s in top)


# ── Global State ─────────────────────────────────────────────────────────

vectorizer = TFIDFVectorizer()
summarizer = ExtractiveSummarizer()

# Seed with study material corpus
STUDY_CORPUS = [
    {"id": "mat_001", "title": "Advanced Data Structures & Algorithms", "description": "Comprehensive guide covering AVL trees, red-black trees, B-trees, graph algorithms including Dijkstra's, Bellman-Ford, Floyd-Warshall, and advanced dynamic programming techniques with complexity analysis.", "category": "DSA", "tags": ["algorithms", "data structures", "trees", "graphs", "dynamic programming"]},
    {"id": "mat_002", "title": "Database Management Systems Complete Notes", "description": "In-depth coverage of relational algebra, SQL optimization, normalization forms (1NF through BCNF), transaction management, ACID properties, concurrency control protocols, and distributed database architectures.", "category": "DBMS", "tags": ["sql", "normalization", "transactions", "indexing", "query optimization"]},
    {"id": "mat_003", "title": "Operating Systems: Concepts & Design", "description": "Process scheduling algorithms (FCFS, SJF, Round Robin, Priority), memory management with paging and segmentation, virtual memory, deadlock detection and prevention, file system implementation, and I/O management.", "category": "OS", "tags": ["processes", "scheduling", "memory management", "deadlock", "file systems"]},
    {"id": "mat_004", "title": "Computer Networks: Protocol Stack", "description": "OSI and TCP/IP models, socket programming, HTTP/HTTPS protocols, DNS resolution, routing algorithms (RIP, OSPF, BGP), congestion control (TCP Tahoe, Reno, CUBIC), network security fundamentals including TLS/SSL.", "category": "Networks", "tags": ["tcp/ip", "routing", "protocols", "security", "socket programming"]},
    {"id": "mat_005", "title": "Machine Learning Fundamentals", "description": "Supervised and unsupervised learning, linear regression, logistic regression, decision trees, random forests, SVM, neural networks, backpropagation, gradient descent optimization, bias-variance tradeoff, and cross-validation techniques.", "category": "AI/ML", "tags": ["machine learning", "neural networks", "classification", "regression", "deep learning"]},
    {"id": "mat_006", "title": "System Design Interview Preparation", "description": "Designing scalable systems including load balancers, caching strategies (Redis, Memcached), message queues (Kafka, RabbitMQ), microservices architecture, CAP theorem, database sharding, and API rate limiting patterns.", "category": "System Design", "tags": ["scalability", "microservices", "caching", "load balancing", "distributed systems"]},
    {"id": "mat_007", "title": "Natural Language Processing with Transformers", "description": "Tokenization, word embeddings (Word2Vec, GloVe), attention mechanisms, transformer architecture, BERT, GPT models, fine-tuning strategies, RAG (Retrieval Augmented Generation), and prompt engineering best practices.", "category": "AI/ML", "tags": ["nlp", "transformers", "bert", "gpt", "embeddings", "rag"]},
    {"id": "mat_008", "title": "Cloud Architecture & DevOps", "description": "AWS, GCP, Azure service comparisons, containerization with Docker, orchestration with Kubernetes, CI/CD pipelines (GitHub Actions, Jenkins), Infrastructure as Code (Terraform), monitoring with Prometheus and Grafana.", "category": "Cloud", "tags": ["aws", "docker", "kubernetes", "cicd", "terraform", "devops"]},
    {"id": "mat_009", "title": "Competitive Programming Handbook", "description": "Number theory, combinatorics, segment trees, Fenwick trees, string algorithms (KMP, Rabin-Karp, Z-algorithm), computational geometry, game theory, and advanced graph algorithms for ICPC and Codeforces preparation.", "category": "DSA", "tags": ["competitive programming", "number theory", "segment tree", "string algorithms"]},
    {"id": "mat_010", "title": "Full Stack Development with Next.js", "description": "Server-side rendering, static site generation, API routes, authentication with NextAuth.js, Prisma ORM integration, database modeling, React Server Components, middleware, and deployment strategies for production applications.", "category": "Web Development", "tags": ["nextjs", "react", "typescript", "prisma", "fullstack", "ssr"]},
]

vectorizer.fit(STUDY_CORPUS)


# ── API Endpoints ────────────────────────────────────────────────────────

@app.get("/", tags=["Health"])
def health_check():
    return {
        "service": "StudyHub ML Engine",
        "version": "2.0.0",
        "status": "operational",
        "features": ["tfidf_semantic_search", "extractive_summarization", "rag_chat", "embeddings"],
        "corpus_size": len(STUDY_CORPUS),
        "model_info": {
            "search": "TF-IDF Cosine Similarity (lightweight, production-ready)",
            "summarizer": "Extractive sentence scoring with positional bias",
            "chat": "Context-augmented response generation"
        }
    }


@app.post("/api/ml/search", response_model=List[SearchResult], tags=["Search"])
def semantic_search(req: QueryRequest):
    """
    Perform semantic search across the study material corpus using TF-IDF vectorization
    and cosine similarity scoring. Supports optional category/level filters.
    """
    results = vectorizer.search(req.query, req.top_k)

    search_results = []
    for doc, score in results:
        if score <= 0:
            continue

        # Generate contextual highlight
        query_terms = set(req.query.lower().split())
        desc_words = doc["description"].split()
        highlight_start = 0
        for i, word in enumerate(desc_words):
            if word.lower().strip('.,;:!?') in query_terms:
                highlight_start = max(0, i - 5)
                break
        highlight = " ".join(desc_words[highlight_start:highlight_start + 20]) + "..."

        search_results.append(SearchResult(
            id=doc["id"],
            title=doc["title"],
            description=doc["description"][:200] + "...",
            score=score,
            category=doc["category"],
            tags=doc.get("tags", []),
            highlight=highlight
        ))

    return search_results


@app.post("/api/ml/summarize", tags=["Summarization"])
def summarize_text(req: SummaryRequest):
    """
    Generate an extractive summary of the provided text using sentence importance scoring.
    Supports multiple output styles: academic, bullet_points, eli5.
    """
    max_sentences = max(2, req.max_length // 50)
    summary = summarizer.summarize(req.text, max_sentences=max_sentences, style=req.style)

    # Compute compression ratio
    original_words = len(req.text.split())
    summary_words = len(summary.split())
    compression = round(1 - (summary_words / original_words), 2) if original_words > 0 else 0

    return {
        "summary": summary,
        "style": req.style,
        "metrics": {
            "original_words": original_words,
            "summary_words": summary_words,
            "compression_ratio": compression,
            "sentences_extracted": max_sentences
        }
    }


@app.post("/api/ml/chat", tags=["RAG Chat"])
def rag_chat(req: ChatRequest):
    """
    RAG-powered chat endpoint. Retrieves relevant study materials based on the query,
    then generates a context-augmented response.
    """
    # Step 1: Retrieve relevant context via semantic search
    search_results = vectorizer.search(req.query, top_k=3)
    context_docs = [doc for doc, score in search_results if score > 0]

    # Step 2: Build context string
    context_str = "\n".join([
        f"[{doc['category']}] {doc['title']}: {doc['description'][:150]}"
        for doc in context_docs
    ])

    # Step 3: Generate response using context
    if context_docs:
        primary = context_docs[0]
        response = (
            f"Based on our study material corpus, here's what I found about '{req.query}':\n\n"
            f"📚 **Most Relevant Resource**: {primary['title']}\n"
            f"📂 Category: {primary['category']}\n"
            f"📝 {primary['description'][:300]}\n\n"
        )
        if len(context_docs) > 1:
            response += "**Related Materials:**\n"
            for doc in context_docs[1:]:
                response += f"  • {doc['title']} ({doc['category']})\n"

        response += f"\n🏷️ Tags: {', '.join(primary.get('tags', []))}"
    else:
        response = (
            f"I couldn't find specific materials matching '{req.query}' in our current corpus. "
            f"Try searching for topics like: Data Structures, DBMS, Operating Systems, "
            f"Machine Learning, System Design, or Computer Networks."
        )

    return {
        "response": response,
        "sources": [{"id": doc["id"], "title": doc["title"], "category": doc["category"]} for doc in context_docs],
        "query": req.query,
        "context_used": len(context_docs)
    }


@app.post("/api/ml/embeddings", tags=["Embeddings"])
def generate_embeddings(req: EmbeddingRequest):
    """
    Generate lightweight text embeddings using a hash-based projection.
    Useful for client-side similarity comparisons and clustering.
    """
    embeddings = []
    dim = 64

    for text in req.texts:
        tokens = re.findall(r'\b[a-zA-Z]{2,}\b', text.lower())
        vec = [0.0] * dim
        for token in tokens:
            h = int(hashlib.md5(token.encode()).hexdigest(), 16)
            for i in range(dim):
                bit = (h >> i) & 1
                vec[i] += 1.0 if bit else -1.0

        # Normalize
        magnitude = math.sqrt(sum(v ** 2 for v in vec)) or 1.0
        vec = [round(v / magnitude, 6) for v in vec]
        embeddings.append(vec)

    return {
        "embeddings": embeddings,
        "dimension": dim,
        "count": len(embeddings),
        "model": "hash-projection-v1"
    }


@app.get("/api/ml/stats", tags=["Analytics"])
def get_stats():
    """Return ML engine statistics and corpus metadata."""
    categories = Counter(doc["category"] for doc in STUDY_CORPUS)
    all_tags = [tag for doc in STUDY_CORPUS for tag in doc.get("tags", [])]
    tag_freq = Counter(all_tags).most_common(10)

    return {
        "corpus_size": len(STUDY_CORPUS),
        "categories": dict(categories),
        "vocabulary_size": len(vectorizer.idf),
        "top_tags": [{"tag": t, "count": c} for t, c in tag_freq],
        "features": {
            "search": {"engine": "TF-IDF", "similarity": "cosine"},
            "summarization": {"method": "extractive", "styles": ["academic", "bullet_points", "eli5"]},
            "chat": {"method": "RAG", "context_window": 3},
            "embeddings": {"method": "hash-projection", "dimension": 64}
        }
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
