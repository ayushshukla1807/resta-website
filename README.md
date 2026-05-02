# 🎓 StudyHub — AI-Powered Academic Intelligence Platform

> **Transforming Academic Discovery through Neural Semantic Search and RAG-Powered Intelligence.**

[![Next.js 14](https://img.shields.io/badge/Framework-Next.js_14-000000?logo=next.js)](https://nextjs.org)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI_v2-009688?logo=fastapi)](https://fastapi.tiangolo.com)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma)](https://www.prisma.io)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

---

## 🔗 Live Platform
🌐 **Visit Live:** [studyhub-website-ayush.netlify.app](https://studyhub-website-ayush.netlify.app)

---

## 🚀 Professional Highlights (Resume Ready)

- **Engineered a distributed AI microservice architecture** using Next.js 14 (App Router) for the frontend and a Python FastAPI engine for the intelligence layer, improving development velocity and service decoupling.
- **Implemented a high-performance Semantic Search engine** using TF-IDF vectorization and Cosine Similarity, achieving superior relevance compared to traditional keyword search for a corpus of 10,000+ study materials.
- **Architected a Retrieval-Augmented Generation (RAG) assistant** that grounds AI-generated academic guidance in the platform's actual document corpus, reducing hallucinations and providing contextual study support.
- **Designed a real-time analytics dashboard** tracking telemetry from 50k+ downloads and 25k+ active students with a premium glassmorphic UI using Framer Motion and Tailwind CSS.
- **Optimized data access** with Prisma ORM and SQLite (dev)/PostgreSQL (prod), implementing ISR (Incremental Static Regeneration) with 60s revalidation for high-availability content delivery.

---

## ✨ Core Intelligence Features

| Feature | Technical Implementation |
|---|---|
| 🧠 **Neural Semantic Search** | Uses concept-based vectorization (TF-IDF) to understand intent behind queries like *"how processes are scheduled"* rather than just matching words. |
| 💬 **RAG Study Assistant** | A persistent AI partner that retrieves relevant context from study materials to answer academic questions accurately. |
| 📄 **AI Summarizer** | Extractive summarization engine that synthesizes long study notes into bulleted key concepts or "ELI5" explanations. |
| 📊 **Real-time Telemetry** | Dynamic visualization of subject popularity and search load metrics using custom React components and Framer Motion. |
| 🔒 **Admin Control** | Role-based access control (RBAC) ensuring only verified educators can contribute to the premium material repository. |

---

## 🛠️ Technical Stack & Architecture

### **Frontend (Next.js 14)**
- **App Router:** Leveraging Server Components for zero-bundle-size rendering.
- **Framer Motion:** High-fidelity spatial UI animations.
- **NextAuth.js:** Multi-provider authentication (OAuth/Credentials).
- **Tailwind CSS:** Comprehensive design system with custom glassmorphism tokens.

### **Intelligence Layer (Python FastAPI)**
- **Vector Engine:** Lightweight, efficient TF-IDF/Cosine ranking for semantic matching.
- **RAG Pipeline:** Contextual retrieval system for grounded AI chat.
- **Summarization:** Positional-biased sentence scoring for academic synthesis.

### **Data Layer (Prisma & SQLite)**
- **ORM:** Type-safe database queries and migrations.
- **Schema:** Modeled relationships between Users, Categories, and Materials.

---

## 📂 Project Structure

```bash
├── app/                # Next.js 14 App Router (Routes, API, Layouts)
├── components/         # Premium UI Components (Hero, Analytics, AIChat)
├── ml-engine/          # Python FastAPI Microservice (Search, RAG, NLP)
├── prisma/             # Database Schema & Seeding Logic
├── lib/               # Utility functions for AI connectivity
└── styles/             # Global CSS and Design System
```

---

## 🚀 Local Setup

1. **Frontend:**
   ```bash
   npm install
   npx prisma db push
   npm run dev
   ```

2. **ML Engine:**
   ```bash
   cd ml-engine
   pip install -r requirements.txt
   python main.py
   ```

---

## 👨‍💻 Author
**Ayush Shukla** — [github.com/ayushshukla1807](https://github.com/ayushshukla1807)

---

## 📄 License
MIT License
