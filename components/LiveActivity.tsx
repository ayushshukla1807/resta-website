import React, { useState, useEffect } from 'react';
import { Download, User, Book, Clock } from 'lucide-react';

const LiveActivity: React.FC = () => {
  const [activities, setActivities] = useState([
    { user: 'Aarav S.', action: 'downloaded', item: 'DSA Complete Notes', time: '2 mins ago' },
    { user: 'Priya M.', action: 'viewed', item: 'DBMS Guide', time: '5 mins ago' },
    { user: 'Rohan K.', action: 'downloaded', item: 'OS Semester Notes', time: '8 mins ago' }
  ]);

  const newActivities = [
    { user: 'Neha P.', action: 'downloaded', item: 'Networks Lab Programs', time: 'just now' },
    { user: 'Karan S.', action: 'viewed', item: 'Project Ideas', time: '1 min ago' },
    { user: 'Sneha R.', action: 'downloaded', item: 'Semester Papers', time: '3 mins ago' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const randomActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
        return [randomActivity, ...prev.slice(0, 2)];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-xl p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Clock className="w-5 h-5 text-green-500 mr-2" />
        Live Activity
      </h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-800/30">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-300">
                <span className="text-white font-medium">{activity.user}</span> {activity.action}{' '}
                <span className="text-green-400">{activity.item}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <Download className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveActivity;