import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialsGrid from '@/components/MaterialsGrid';
import { studyMaterials } from '@/data/mockData';
import { Database, Download, Users, Star } from 'lucide-react';

const DBMSGuides: React.FC = () => {
  const dbmsMaterials = studyMaterials.filter(material => 
    material.tags.includes('dbms') || 
    material.subject === 'DBMS' || 
    material.title.toLowerCase().includes('database')
  );

  return (
    <>
      <Head>
        <title>DBMS Guides - ReSta</title>
        <meta name="description" content="Database Management System guides, SQL tutorials, and database design resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">DBMS Guides</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Complete Database Management System resources with SQL tutorials and practical examples
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="glass rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">32+</div>
                <div className="text-gray-400">Resources</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8K+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.7/5</div>
                <div className="text-gray-400">Rating</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Database className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-gray-400">SQL Examples</div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="glass rounded-xl p-6 mb-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-4">Topics Covered</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['SQL Basics', 'Normalization', 'Transactions', 'Indexing', 'ER Diagrams', 'Joins', 'ACID Properties', 'NoSQL'].map((topic) => (
                  <div key={topic} className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Grid */}
            <MaterialsGrid materials={dbmsMaterials} />

            {dbmsMaterials.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">
                  No DBMS materials found
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DBMSGuides;