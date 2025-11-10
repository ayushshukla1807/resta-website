import React from 'react';
import { TrendingUp, Users, Download, Clock, BarChart3 } from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  const stats = [
    { icon: <Download className="w-6 h-6" />, label: 'Total Downloads', value: '50,234', change: '+12%' },
    { icon: <Users className="w-6 h-6" />, label: 'Active Users', value: '23,456', change: '+8%' },
    { icon: <Clock className="w-6 h-6" />, label: 'Avg. Study Time', value: '2.4h', change: '+15%' },
    { icon: <BarChart3 className="w-6 h-6" />, label: 'Completion Rate', value: '78%', change: '+5%' }
  ];

  const popularSubjects = [
    { name: 'Data Structures', progress: 85, downloads: 12340 },
    { name: 'DBMS', progress: 72, downloads: 9876 },
    { name: 'Operating Systems', progress: 68, downloads: 8765 },
    { name: 'Networks', progress: 61, downloads: 7654 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-space-grotesk mb-4">
            Platform <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time insights and performance metrics of our learning platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${
                  index === 0 ? 'from-green-500 to-emerald-500' :
                  index === 1 ? 'from-blue-500 to-cyan-500' :
                  index === 2 ? 'from-purple-500 to-pink-500' :
                  'from-orange-500 to-red-500'
                }`}>
                  {stat.icon}
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Popular Subjects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
              Popular Subjects
            </h3>
            <div className="space-y-4">
              {popularSubjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">{subject.name}</span>
                    <span className="text-green-400 text-sm">{subject.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-6">Weekly Activity</h3>
            <div className="space-y-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-gray-300 w--12">{day}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${20 + (index * 15)}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm w-12 text-right">{20 + (index * 15)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;