"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, BrainCircuit, Filter, ArrowRight, Download, Star, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

// Search results inner component to handle useSearchParams which requires Suspense
const SearchContent = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/ml/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery, top_k: 10 }),
      });
      if (!response.ok) throw new Error('Search failed');
      const data = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Search Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-50 transition duration-500"></div>
          <div className="relative flex items-center bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
            <Search className="w-6 h-6 text-gray-400 ml-4" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Refine your intelligence query..."
              className="w-full bg-transparent border-none text-white placeholder-gray-500 px-4 py-4 outline-none focus:ring-0 text-xl font-light"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <BrainCircuit className="w-5 h-5" />}
              Re-Scan
            </button>
          </div>
        </form>
        
        {initialQuery && !loading && (
          <p className="mt-6 text-gray-400 flex items-center gap-2 font-light">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Found <span className="text-white font-semibold">{results.length}</span> high-relevance matches for &quot;{initialQuery}&quot;
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 border-r border-white/5 pr-8 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-400" /> Filter Results
              </h3>
              <div className="space-y-3 font-light">
                {['All Categories', 'Engineering', 'Mathematics', 'Computer Science', 'Management'].map((cat) => (
                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-5 h-5 border border-white/20 rounded bg-white/5 group-hover:border-emerald-500/50 transition-colors"></div>
                    <span className="text-gray-400 group-hover:text-white transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-emerald-400" /> AI Tip
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our semantic search understands concepts, not just keywords. Try asking natural questions like &quot;How does TCP congestion control work?&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Main Results Column */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 space-y-4"
              >
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-400 font-medium animate-pulse">Running neural scan across study repository...</p>
              </motion.div>
            ) : error ? (
              <motion.div 
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Search Disruption</h3>
                  <p className="text-gray-400">{error}. Please ensure the StudyHub ML Engine is active.</p>
                </div>
              </motion.div>
            ) : results.length > 0 ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {results.map((result, idx) => (
                  <motion.div 
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass group rounded-2xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-emerald-400 tracking-wider">
                            {result.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-blue-400 font-mono">
                            <BrainCircuit className="w-3 h-3" />
                            RELEVANCE: {Math.round(result.score * 100)}%
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                          {result.title}
                        </h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                          {result.description}
                        </p>
                        
                        {/* Contextual Highlight from ML Engine */}
                        <div className="bg-white/5 border-l-4 border-emerald-500/50 p-4 rounded-r-lg mt-4">
                          <p className="text-sm text-gray-300 italic font-medium leading-relaxed">
                            &quot;...{result.highlight}...&quot;
                          </p>
                          <span className="text-[10px] uppercase text-gray-500 mt-2 block tracking-widest font-bold">Semantic Snapshot</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-4">
                          {result.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded">#{tag.toUpperCase()}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-row md:flex-col gap-3">
                        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-emerald-500 hover:text-black transition-all">
                          <Download className="w-4 h-4" /> Get File
                        </button>
                        <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
                          <Star className="w-4 h-4" /> Save
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : initialQuery ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No High-Confidence Matches</h3>
                <p className="text-gray-400 font-light">Try broader terms or browse by category above.</p>
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 italic font-light">Enter a query above to initiate the intelligence scan.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-inter">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
