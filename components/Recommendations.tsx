import React from 'react';
import { Brain, Sparkles, Zap } from 'lucide-react';

const Recommendations: React.FC = () => {
  const recommendations = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'Based on your interests',
      items: ['Advanced DSA Patterns', 'System Design Basics', 'Cloud Computing Fundamentals'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Trending in CSE',
      items: ['Machine Learning Projects', 'Blockchain Development', 'DevOps Practices'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Quick Skill Boost',
      items: ['Python for Data Science', 'Web Security Essentials', 'API Design Patterns'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="glass rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
        AI Recommendations
      </h3>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <div className={`text-white bg-gradient-to-r ${rec.color} p-2 rounded-lg`}>
                {rec.icon}
              </div>
              <span className="text-white font-medium text-sm">{rec.title}</span>
            </div>
            <ul className="space-y-2">
              {rec.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;