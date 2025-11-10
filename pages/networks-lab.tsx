import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialsGrid from '@/components/MaterialsGrid';
import { studyMaterials } from '@/data/mockData';
import { Network, Download, Users, Star } from 'lucide-react';

const NetworksLab: React.FC = () => {
  const networksMaterials = studyMaterials.filter(material => 
    material.tags.includes('networks') || 
    material.tags.includes('computer-networks') ||
    material.subject === 'Computer Networks'
  );

  return (
    <>
      <Head>
        <title>Networks Lab - ReSta</title>
        <meta name="description" content="Computer Networks lab programs, socket programming, and network simulations" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">Networks Lab</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Complete Computer Networks lab programs with socket programming and network simulations
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="glass rounded-xl p-6 text-center">
                <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">23+</div>
                <div className="text-gray-400">Lab Programs</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6K+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.6/5</div>
                <div className="text-gray-400">Rating</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Network className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-gray-400">Protocols</div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="glass rounded-xl p-6 mb-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-4">Lab Programs</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Socket Programming', 'TCP/UDP', 'HTTP Server', 'DNS Lookup', 'Packet Sniffer', 'Chat Application', 'File Transfer', 'Network Simulator'].map((topic) => (
                  <div key={topic} className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Grid */}
            <MaterialsGrid materials={networksMaterials} />

            {networksMaterials.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">
                  No Networks materials found
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

export default NetworksLab;