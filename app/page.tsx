import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MaterialsGrid from '@/components/MaterialsGrid';
import { BookOpen, Users, Download, Award } from 'lucide-react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default async function Home() {
  // Fetch real data from PostgreSQL (currently SQLite in dev)
  const categoriesDb = await prisma.category.findMany();
  
  // Fetch featured materials directly from Database
  const featuredMaterialsDb = await prisma.studyMaterial.findMany({
    take: 6,
    orderBy: {
      rating: 'desc'
    },
    include: {
      category: true
    }
  });

  // Map to the format MaterialsGrid expects if necessary
  const formattedMaterials = featuredMaterialsDb.map(m => ({
    id: m.id,
    title: m.title,
    description: m.description,
    category: m.category.name,
    subject: m.subject,
    fileType: m.fileType,
    fileSize: m.fileSize,
    downloadUrl: m.downloadUrl,
    downloadCount: m.downloadCount,
    rating: m.rating,
    thumbnail: m.thumbnail,
    tags: m.tags ? m.tags.split(',') : []
  }));

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Categories Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-space-grotesk mb-4">
                Explore by <span className="gradient-text">Categories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover AI-curated study materials across various categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesDb.map((category) => (
                <div
                  key={category.id}
                  className="glass bg-gray-900/80 rounded-xl p-6 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-gray-800 hover:border-green-500/50 group cursor-pointer"
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
                Trending <span className="gradient-text">Study Materials</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The most recommended resources by our global community
              </p>
            </div>

            <MaterialsGrid materials={formattedMaterials as any} />

            <div className="text-center mt-12">
              <button className="border border-gray-600 hover:border-green-500 hover:text-green-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-gray-900/50">
                Explore All Materials
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400">Study Materials</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">25K+</div>
                <div className="text-gray-400">Active Students</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
