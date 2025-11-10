'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Download, Star, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
          <span className="gradient-text">Study Materials</span>
          <br />
          <span className="text-white">For Everyone</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Access thousands of free study materials, books, and resources for government exams,
          competitive tests, and academic success. No registration required.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2 text-gray-300">
            <Download className="w-5 h-5 text-green-500" />
            <span className="text-lg font-semibold">10,000+</span>
            <span className="text-gray-400">Downloads</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-lg font-semibold">4.8</span>
            <span className="text-gray-400">Rating</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-semibold">50,000+</span>
            <span className="text-gray-400">Students</span>
          </div>
        </div>

        {/* CSE Specific Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">500+</div>
            <div className="text-gray-400 text-sm">CSE Resources</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">200+</div>
            <div className="text-gray-400 text-sm">Lab Programs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">50+</div>
            <div className="text-gray-400 text-sm">Semester Papers</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/materials"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Browse Materials</span>
          </Link>
          <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50">
            How It Works
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
