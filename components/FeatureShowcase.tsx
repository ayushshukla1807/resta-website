import React from 'react';
import { Download, Users, Star, Clock, Shield, Zap } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Instant Downloads",
      description: "No registration required. Direct downloads in one click."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Verified",
      description: "All materials reviewed by subject experts."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Access",
      description: "Optimized for quick loading and mobile devices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Upload and share your own study materials."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Ratings & Reviews",
      description: "See what other students found helpful."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Regular Updates",
      description: "New materials added every week."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-space-grotesk mb-4">
            Why Choose <span className="gradient-text">ReSta</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide the best platform for engineering students to access quality study materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;