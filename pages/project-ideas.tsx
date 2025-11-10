import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Settings, Download, Users, Star, ExternalLink } from 'lucide-react';

const ProjectIdeas: React.FC = () => {
  const projectIdeas = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce website with user authentication, product catalog, shopping cart, and payment integration.",
      difficulty: "Intermediate",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "Intelligent chatbot using natural language processing for customer support and assistance.",
      difficulty: "Advanced",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      category: "Artificial Intelligence"
    },
    {
      id: 3,
      title: "Mobile Expense Tracker",
      description: "Cross-platform mobile app for tracking daily expenses with charts and budget planning.",
      difficulty: "Beginner",
      technologies: ["React Native", "Firebase", "Chart.js"],
      category: "Mobile Development"
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Secure voting system using blockchain technology for transparent and tamper-proof elections.",
      difficulty: "Advanced",
      technologies: ["Solidity", "Web3.js", "Ethereum", "React"],
      category: "Blockchain"
    },
    {
      id: 5,
      title: "IoT Home Automation",
      description: "Smart home system controlling lights, temperature, and security using IoT devices.",
      difficulty: "Intermediate",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "Python"],
      category: "Internet of Things"
    },
    {
      id: 6,
      title: "Machine Learning Stock Predictor",
      description: "Stock price prediction system using machine learning algorithms and historical data.",
      difficulty: "Advanced",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Data Science"
    }
  ];

  return (
    <>
      <Head>
        <title>Project Ideas - ReSta</title>
        <meta name="description" content="Innovative project ideas for CSE students with implementation guides and resources" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">Project Ideas</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Innovative project ideas for CSE students with implementation guides and resources
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="glass rounded-xl p-6 text-center">
                <Settings className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-gray-400">Project Ideas</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3K+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.7/5</div>
                <div className="text-gray-400">Rating</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <ExternalLink className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-gray-400">Categories</div>
              </div>
            </div>

            {/* Project Ideas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectIdeas.map((project) => (
                <div
                  key={project.id}
                  className="glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-green-500/50 group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectIdeas;