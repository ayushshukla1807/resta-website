import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - ReSta</title>
        <meta name="description" content="Learn more about ReSta and our mission" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold font-space-grotesk mb-6">
                About <span className="gradient-text">ReSta</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Empowering students worldwide with free, high-quality educational resources
              </p>
            </div>

            {/* Mission Section */}
            <div className="glass rounded-xl p-8 mb-12 border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400">
                    To provide free, accessible education to every student regardless of their background
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400">
                    A world where quality education is available to everyone, everywhere
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
                  <p className="text-gray-400">
                    Quality, Accessibility, Community, and Innovation in education
                  </p>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-space-grotesk mb-6">Our Story</h2>
                <p className="text-gray-400 mb-4">
                  ReSta was born from a simple observation: quality education materials are often locked behind paywalls, making them inaccessible to many students who need them the most.
                </p>
                <p className="text-gray-400 mb-4">
                  We started in 2024 with a mission to democratize education by providing free, high-quality study materials to students worldwide. Our platform brings together educators, students, and institutions to create a collaborative learning ecosystem.
                </p>
                <p className="text-gray-400">
                  Today, we serve thousands of students across the globe, helping them achieve their academic and career goals without financial barriers.
                </p>
              </div>
              <div className="glass rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-4">Why Choose ReSta?</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>100% Free - No hidden costs, no subscriptions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Quality Verified - All materials reviewed by experts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Diverse Categories - From school level to competitive exams</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Community Driven - Upload and share your own materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Always Accessible - Available 24/7 on any device</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;