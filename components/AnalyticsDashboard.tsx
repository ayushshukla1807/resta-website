"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Download, Clock, BarChart3, Activity } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const AnalyticsDashboard: React.FC = () => {
  const stats = [
    { icon: <Download className="w-6 h-6" />, label: 'Total Downloads', value: '150,234', change: '+32%' },
    { icon: <Users className="w-6 h-6" />, label: 'Active Students', value: '45,892', change: '+18%' },
    { icon: <Clock className="w-6 h-6" />, label: 'Avg. Session', value: '45m', change: '+12%' },
    { icon: <Activity className="w-6 h-6" />, label: 'API Requests', value: '1.2M', change: '+45%' }
  ];

  const popularSubjects = [
    { name: 'Machine Learning', progress: 92, downloads: 45200 },
    { name: 'System Design', progress: 85, downloads: 38100 },
    { name: 'Data Structures', progress: 78, downloads: 32000 },
    { name: 'Cloud Architecture', progress: 65, downloads: 28400 }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Analytics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Real-time telemetry from the StudyHub ML Engine and global student activity.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div variants={itemVariants} key={index} className="glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
                    {React.cloneElement(stat.icon, { className: "w-6 h-6 text-purple-400" })}
                  </div>
                  <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded-full">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1 truncate">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 text-purple-500 mr-3" />
              Trending ML/AI Topics
            </h3>
            <div className="space-y-6">
              {popularSubjects.map((subject, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-200 font-medium tracking-wide">{subject.name}</span>
                    <span className="text-purple-400 font-mono">{subject.downloads.toLocaleString()} req</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${subject.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <BarChart3 className="w-6 h-6 text-pink-500 mr-3" />
              Semantic Search Load
            </h3>
            <div className="space-y-6 flex flex-col justify-end h-[280px]">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                const heightPercentage = 20 + (index * 12) + (Math.random() * 20);
                return (
                  <div key={day} className="flex items-center justify-between group">
                    <span className="text-gray-400 font-medium w-12">{day}</span>
                    <div className="flex-1 mx-6 relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5 border-dashed"></div>
                      </div>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${heightPercentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="relative h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full group-hover:h-4 transition-all"
                      ></motion.div>
                    </div>
                    <span className="text-gray-500 text-sm font-mono w-16 text-right">
                      {Math.round(heightPercentage * 100)}ms
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;