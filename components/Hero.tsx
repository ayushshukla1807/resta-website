'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, BookOpen, BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black isolation-auto">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-gray-300">StudyHub Intelligence Engine v2.0 Live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white font-space-grotesk leading-tight"
          >
            The Ultimate <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
              AI-Powered Academic <br className="hidden md:block"/> Resource Platform
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light"
          >
            Access tens of thousands of premium study materials across engineering disciplines. Powered by a neural semantic search and automated generative summarization.
          </motion.p>

          {/* AI Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-2xl relative mt-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
              <Search className="w-6 h-6 text-gray-400 ml-4" />
              <input 
                type="text" 
                placeholder="Ask the AI: 'Explain deadlock prevention with diagrams...'"
                className="w-full bg-transparent border-none text-white placeholder-gray-500 px-4 py-4 outline-none focus:ring-0 text-lg"
              />
              <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <BrainCircuit className="w-5 h-5" />
                Search
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-8 mt-12 text-gray-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-emerald-400"/> 10k+ PDFs Indexed</div>
            <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-cyan-400"/> RAG-Powered Summaries</div>
            <div className="flex items-center gap-2"><BrainCircuit className="w-4 h-4 text-purple-400"/> Full Semantic Querying</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;