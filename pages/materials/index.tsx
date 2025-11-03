import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialsGrid from '@/components/MaterialsGrid';
import QuickAccess from '@/components/QuickAccess';
import { studyMaterials, categories } from '@/data/mockData';
import { Search, Filter, Grid, List } from 'lucide-react';
import { StudyMaterial, SearchFilters } from '@/types';

const MaterialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMaterials = useMemo(() => {
    return studyMaterials.filter(material => {
      // Search term filter
      if (searchTerm && !material.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !material.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }

      // Category filter
      if (filters.category && material.category !== filters.category) {
        return false;
      }

      // Level filter
      if (filters.level && material.level !== filters.level) {
        return false;
      }

      // File type filter
      if (filters.fileType && material.fileType !== filters.fileType) {
        return false;
      }

      return true;
    });
  }, [searchTerm, filters]);

  const uniqueLevels = Array.from(new Set(studyMaterials.map(m => m.level)));
  const uniqueFileTypes = Array.from(new Set(studyMaterials.map(m => m.fileType)));

  return (
    <>
      <Head>
        <title>Study Materials - ReSta</title>
        <meta name="description" content="Browse our extensive collection of free study materials and resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold font-space-grotesk mb-4">
                Study <span className="gradient-text">Materials</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover {studyMaterials.length}+ free study materials across various categories and subjects
              </p>
            </div>

            {/* Search and Filters */}
            <div className="glass rounded-xl p-6 mb-8 border border-gray-800">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="flex-1 w-full lg:max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search materials, subjects, tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>

                {/* View Mode and Filter Toggle */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-gray-900 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid'
                          ? 'bg-green-600 text-white'
                          : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list'
                          ? 'bg-green-600 text-white'
                          : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${showFilters
                        ? 'border-green-500 text-green-500 bg-green-500/10'
                        : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                      }`}
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {/* Filter Panel */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Category
                      </label>
                      <select
                        value={filters.category || ''}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          category: e.target.value || undefined
                        }))}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500"
                      >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Level Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Level
                      </label>
                      <select
                        value={filters.level || ''}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          level: e.target.value || undefined
                        }))}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500"
                      >
                        <option value="">All Levels</option>
                        {uniqueLevels.map(level => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* File Type Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        File Type
                      </label>
                      <select
                        value={filters.fileType || ''}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          fileType: e.target.value || undefined
                        }))}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500"
                      >
                        <option value="">All File Types</option>
                        {uniqueFileTypes.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => setFilters({})}
                      className="text-gray-400 hover:text-white text-sm underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Main Content Grid with Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Quick Access Sidebar */}
              <div className="lg:col-span-1">
                <QuickAccess />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-400">
                    Showing {filteredMaterials.length} of {studyMaterials.length} materials
                  </p>
                  <div className="text-gray-400 text-sm">
                    Sorted by: <span className="text-white">Most Popular</span>
                  </div>
                </div>

                {/* Materials Grid */}
                <MaterialsGrid materials={filteredMaterials} />

                {/* No Results */}
                {filteredMaterials.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-lg mb-4">
                      No materials found matching your criteria
                    </div>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setFilters({});
                      }}
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      Clear search and filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MaterialsPage;