from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="StudyHub ML Engine", version="1.0.0")

# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    query: str
    
class SummaryRequest(BaseModel):
    text: str

@app.get("/")
def read_root():
    return {"status": "ML Engine active", "features": ["semantic_search", "summarization", "rag"]}

@app.post("/api/ml/search")
def semantic_search(req: QueryRequest):
    # Dummy implementation for vector search
    # In a real project, we'd use SentenceTransformers + Pinecone/Faiss
    return {
        "query": req.query,
        "results": [
            {"id": "1", "score": 0.95, "title": "Mock Result 1"},
            {"id": "2", "score": 0.88, "title": "Mock Result 2"}
        ]
    }

@app.post("/api/ml/summarize")
def summarize_text(req: SummaryRequest):
    # Dummy implementation for summarization using Langchain & LLMs
    return {
        "summary": "This is an AI generated summary of the original text. It condenses the important points into a brief format."
    }

@app.post("/api/ml/chat")
def rag_chat(req: QueryRequest):
    return {
        "response": f"AI Assistant says: I've processed your query '{req.query}' using RAG over our study materials."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
