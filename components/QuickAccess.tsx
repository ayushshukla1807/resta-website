import React from 'react';
import { Book, Code, Database, Cpu, Network, Settings } from 'lucide-react';

const QuickAccess: React.FC = () => {
  const quickLinks = [
    { icon: <Code className="w-5 h-5" />, label: "DSA Notes", count: "45" },
    { icon: <Database className="w-5 h-5" />, label: "DBMS Guides", count: "32" },
    { icon: <Cpu className="w-5 h-5" />, label: "OS Resources", count: "28" },
    { icon: <Network className="w-5 h-5" />, label: "Networks Lab", count: "23" },
    { icon: <Book className="w-5 h-5" />, label: "Semester Papers", count: "67" },
    { icon: <Settings className="w-5 h-5" />, label: "Project Ideas", count: "15" }
  ];

  return (
    <div className="glass rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">Quick CSE Access</h3>
      <div className="space-y-3">
        {quickLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              <div className="text-green-400 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-gray-300 group-hover:text-white">{link.label}</span>
            </div>
            <span className="text-green-400 text-sm font-medium">{link.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
