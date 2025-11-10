import React from 'react';
import { Target, Award, TrendingUp } from 'lucide-react';

const ProgressTracker: React.FC = () => {
  const milestones = [
    { icon: <Target className="w-6 h-6" />, label: 'Study Goals', progress: 75, color: 'from-green-500 to-emerald-500' },
    { icon: <Award className="w-6 h-6" />, label: 'Course Completion', progress: 60, color: 'from-blue-500 to-cyan-500' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Skill Level', progress: 85, color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="glass rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4">Your Learning Progress</h3>
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`text-white bg-gradient-to-r ${milestone.color} p-2 rounded-lg`}>
                  {milestone.icon}
                </div>
                <span className="text-gray-300 text-sm">{milestone.label}</span>
              </div>
              <span className="text-white text-sm font-medium">{milestone.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r ${milestone.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${milestone.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;