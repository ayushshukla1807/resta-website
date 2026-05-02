import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MaterialsGrid from '@/components/MaterialsGrid';
import FeatureShowcase from '@/components/FeatureShowcase';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Testimonials from '@/components/Testimonials';
import LiveActivity from '@/components/LiveActivity';
import { BookOpen, Users, Download, Award, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
  // Static demo data for portfolio showcase (DB integration ready for production)
  const categoriesDb = [
    { id: '1', name: 'Computer Science', description: 'Algorithms, OS, Networks, and more.', icon: '💻' },
    { id: '2', name: 'Mathematics', description: 'Calculus, Linear Algebra, Discrete Math.', icon: '📐' },
    { id: '3', name: 'Physics', description: 'Mechanics, Thermodynamics, Quantum Physics.', icon: '⚛️' },
    { id: '4', name: 'Data Science', description: 'ML, Statistics, Big Data.', icon: '📊' },
    { id: '5', name: 'Electronics', description: 'Circuits, Signals & Systems, VLSI.', icon: '🔌' },
    { id: '6', name: 'Software Engineering', description: 'System Design, DevOps, Architecture.', icon: '🏗️' },
  ];

  const formattedMaterials: any[] = [
    { id: '1', title: 'Advanced System Design', description: 'Comprehensive guide to scalable systems.', category: 'CS', subject: 'System Design', fileType: 'PDF', fileSize: '4.2 MB', downloadUrl: '#', downloadCount: 12400, rating: 4.9, thumbnail: '', tags: ['system-design', 'scalability'], author: 'Ayush Shukla', uploadDate: new Date().toISOString(), pages: 210, level: 'Advanced' },
    { id: '2', title: 'Machine Learning Fundamentals', description: 'From linear regression to neural networks.', category: 'Data Science', subject: 'ML', fileType: 'PDF', fileSize: '6.1 MB', downloadUrl: '#', downloadCount: 9800, rating: 4.8, thumbnail: '', tags: ['ml', 'ai'], author: 'Ayush Shukla', uploadDate: new Date().toISOString(), pages: 350, level: 'Intermediate' },
  ];




  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-inter">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Feature Showcase Section */}
        <FeatureShowcase />

        {/* Categories Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Curated Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Categories</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                Discover high-quality study materials organized by academic domain and intelligence relevance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoriesDb.map((category) => (
                <div
                  key={category.id}
                  className="glass group rounded-2xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 font-light">
                      {category.description}
                    </p>
                    <div className="flex items-center text-emerald-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      Browse Materials <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <AnalyticsDashboard />

        {/* Featured Materials */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                  Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Resources</span>
                </h2>
                <p className="text-lg text-gray-400 font-light">
                  The most accessed and highly rated study materials across the global platform.
                </p>
              </div>
              <Link href="/materials" className="group flex items-center text-white font-semibold">
                Explore All <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <MaterialsGrid materials={formattedMaterials as any} />
              </div>
              <div className="lg:col-span-1">
                <LiveActivity />
                <div className="mt-8 glass rounded-2xl p-6 border border-white/5 bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-emerald-400 mr-2" />
                    AI Recommendation
                  </h4>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Based on current trends in Machine Learning and System Design, we suggest checking out the advanced protocol stack guides.
                  </p>
                  <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">
                    View Personalized Suggestions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-500/20 rounded-full blur-[120px] opacity-20"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 tracking-tighter">
              Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Academic Game</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Join 50,000+ engineering students leveraging the power of AI to streamline their study workflow and achieve academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-white/10">
                Get Started for Free
              </button>
              <button className="px-10 py-5 border border-white/10 glass rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors">
                Contact Academic Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
