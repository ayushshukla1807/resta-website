"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Search, Layers, Shield, Cpu, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Neural Semantic Search",
      description: "TF-IDF vectorized search engine with cosine similarity ranking across 10,000+ indexed documents.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "RAG Study Assistant",
      description: "Retrieval-Augmented Generation chat that grounds answers in your actual study materials.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Extractive Summarizer",
      description: "Automatic document summarization with academic, bullet-point, and ELI5 output styles.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Full-Stack Architecture",
      description: "Next.js 14 App Router + Prisma ORM + FastAPI microservice. Production-grade from day one.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Autocomplete",
      description: "Contextual search suggestions powered by corpus analysis and tag frequency scoring.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ISR + Edge Caching",
      description: "Incremental Static Regeneration with 60s revalidation for near-instant page loads globally.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">StudyHub</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            An enterprise-grade AI platform engineered for the modern learner.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-8 border border-white/5 hover:border-white/15 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {React.cloneElement(feature.icon, { className: "w-7 h-7 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase;