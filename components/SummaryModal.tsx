"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, BrainCircuit, Loader2, Copy, Check, FileText } from 'lucide-react';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  material: {
    title: string;
    description: string;
  };
}

const SummaryModal: React.FC<SummaryModalProps> = ({ isOpen, onClose, material }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateSummary = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ml/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: material.description,
          style: 'bullet_points'
        }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      setSummary("Failed to generate summary. Please ensure ML Engine is connected.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      generateSummary();
    } else {
      setSummary(null);
    }
  }, [isOpen]);

  const copyToClipboard = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass border border-white/10 rounded-3xl overflow-hidden bg-gray-900/90 shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{material.title}</h3>
                  <p className="text-sm text-emerald-400 font-medium">AI Semantic Summary</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6 min-h-[300px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                  <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mb-4" />
                  <p className="text-gray-400 font-medium font-mono text-sm tracking-widest uppercase">Synthesizing Core Concepts...</p>
                </div>
              ) : summary ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                      <BrainCircuit className="w-4 h-4" /> Neural Output
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors uppercase tracking-widest"
                    >
                      {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Summary</>}
                    </button>
                  </div>
                  <div className="text-gray-300 leading-relaxed text-lg font-light whitespace-pre-line bg-white/5 p-6 rounded-2xl border border-white/5">
                    {summary}
                  </div>
                </motion.div>
              ) : null}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white/[0.02] border-t border-white/10 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SummaryModal;
