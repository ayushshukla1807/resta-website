import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MaterialsGrid from '@/components/MaterialsGrid';
import { categories, studyMaterials } from '@/data/mockData';
import { BookOpen, Users, Download, Award } from 'lucide-react';

const Home: React.FC = () => {
  const featuredMaterials = studyMaterials.slice(0, 6);

  return (
    <>
      <Head>
        <title>ReSta - Free Study Materials & Resources</title>
        <meta name="description" content="Access thousands of free study materials, books, and resources for government exams, competitive tests, and academic success." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main>
          <Hero />

          {/* Categories Section */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold font-space-grotesk mb-4">
                  Explore by <span className="gradient-text">Categories</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Discover study materials across various categories and subjects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-green-500/50 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-400 text-sm font-medium">
                            {category.materialCount}+ materials
                          </span>
                          <span className="text-gray-500 group-hover:text-green-400 transition-colors">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Materials */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold font-space-grotesk mb-4">
                  Featured <span className="gradient-text">Study Materials</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Handpicked quality resources loved by thousands of students
                </p>
              </div>

              <MaterialsGrid materials={featuredMaterials} />

              <div className="text-center mt-12">
                <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50">
                  View All Materials
                </button>
              </div>
            </div>
          </section>
          {/* CSE Specialization Section */}
          <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-space-grotesk mb-4">
                  <span className="gradient-text">CSE Engineering</span> Resources
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Specialized materials for Computer Science Engineering students
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {['DSA', 'DBMS', 'OS', 'Networks', 'OOP', 'Python', 'Java', 'Web Dev'].map((subject) => (
                  <div key={subject} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{subject}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{subject}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Explore CSE Resources
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-gray-400">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">1.2K+</div>
                  <div className="text-gray-400">Study Materials</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">25K+</div>
                  <div className="text-gray-400">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;


