import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialsGrid from '@/components/MaterialsGrid';
import { studyMaterials } from '@/data/mockData';
import { Book, Download, Users, Star } from 'lucide-react';

const SemesterPapers: React.FC = () => {
  const semesterMaterials = studyMaterials.filter(material => 
    material.tags.includes('semester') || 
    material.category === 'Semester Materials'
  );

  return (
    <>
      <Head>
        <title>Semester Papers - ReSta</title>
        <meta name="description" content="Previous semester question papers, model papers, and exam preparation resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">Semester Papers</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Previous semester question papers, model papers, and exam preparation resources
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="glass rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">67+</div>
                <div className="text-gray-400">Papers</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15K+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-gray-400">Rating</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Book className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-gray-400">Semesters</div>
              </div>
            </div>

            {/* Semester List */}
            <div className="glass rounded-xl p-6 mb-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-4">Available Semesters</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'].map((semester) => (
                  <div key={semester} className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <span className="text-gray-300">{semester}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Grid */}
            <MaterialsGrid materials={semesterMaterials} />

            {semesterMaterials.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">
                  No semester papers found
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

export default SemesterPapers;
