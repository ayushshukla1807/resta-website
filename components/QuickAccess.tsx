import React from 'react';
import Link from 'next/link';
import { Book, Code, Database, Cpu, Network, Settings } from 'lucide-react';

const QuickAccess: React.FC = () => {
  const quickLinks = [
    { 
      icon: <Code className="w-5 h-5" />, 
      label: "DSA Notes", 
      count: "45",
      href: "/dsa-notes"
    },
    { 
      icon: <Database className="w-5 h-5" />, 
      label: "DBMS Guides", 
      count: "32",
      href: "/dbms-guides"
    },
    { 
      icon: <Cpu className="w-5 h-5" />, 
      label: "OS Resources", 
      count: "28",
      href: "/os-resources"
    },
    { 
      icon: <Network className="w-5 h-5" />, 
      label: "Networks Lab", 
      count: "23",
      href: "/networks-lab"
    },
    { 
      icon: <Book className="w-5 h-5" />, 
      label: "Semester Papers", 
      count: "67",
      href: "/semester-papers"
    },
    { 
      icon: <Settings className="w-5 h-5" />, 
      label: "Project Ideas", 
      count: "15",
      href: "/project-ideas"
    }
  ];

  return (
    <div className="glass rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">Quick CSE Access</h3>
      <div className="space-y-3">
        {quickLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer group">
              <div className="flex items-center space-x-3">
                <div className="text-green-400 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-gray-300 group-hover:text-white">{link.label}</span>
              </div>
              <span className="text-green-400 text-sm font-medium">{link.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
