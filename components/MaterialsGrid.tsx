import React from 'react';
import { StudyMaterial } from '@/types';
import { Download, Star, Eye, Calendar, User, FileText } from 'lucide-react';

interface MaterialsGridProps {
  materials: StudyMaterial[];
}

// Fixed date formatting function
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ materials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (

        // In MaterialsGrid.tsx, update the card container:
        <div
          key={material.id}
          className="premium-card glass rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-green-500/50 group glow-effect"
        >

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {material.fileType}
                </span>
                <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded ml-1">
                  {material.level}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{material.rating}</span>
            </div>
          </div>

          {/* Title and Description */}
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
            {material.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {material.description}
          </p>

          {/* Meta Information */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <User className="w-4 h-4" />
              <span>{material.author}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              {/* FIXED DATE FORMATTING */}
              <span suppressHydrationWarning>{formatDate(material.uploadDate)}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {material.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4" />
                <span>{material.downloadCount}</span>
              </div>
              {material.pages && (
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>{material.pages} pages</span>
                </div>
              )}
            </div>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialsGrid;