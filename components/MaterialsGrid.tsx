import React from "react";
import { StudyMaterial } from "@/types";
import { FileText, Video, BookOpen } from "lucide-react";

export interface MaterialsGridProps {
  materials: StudyMaterial[];
  viewMode: "grid" | "list"; // ✅ Added this line
}

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ materials, viewMode }) => {
  if (!materials || materials.length === 0) {
    return <div className="text-center text-gray-400 py-10">No materials available</div>;
  }

  // Pick icon by file type
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="w-5 h-5 text-green-400" />;
      case "video":
        return <Video className="w-5 h-5 text-blue-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
    }
  };

  // Layout selection
  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {materials.map((mat) => (
          <div
            key={mat.id}
            className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500 transition-all"
          >
            <div className="flex items-center space-x-4">
              {getIcon(mat.fileType)}
              <div>
                <h3 className="font-semibold text-lg">{mat.title}</h3>
                <p className="text-gray-400 text-sm">{mat.description}</p>
              </div>
            </div>
            <a
              href={mat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-sm underline"
            >
              View
            </a>
          </div>
        ))}
      </div>
    );
  }

  // Default: Grid view
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((mat) => (
        <div
          key={mat.id}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition-all"
        >
          <div className="flex items-center space-x-2 mb-3">
            {getIcon(mat.fileType)}
            <span className="text-sm text-gray-400">{mat.fileType}</span>
          </div>
          <h3 className="font-semibold text-xl mb-2">{mat.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{mat.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{mat.category}</span>
            <a
              href={mat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialsGrid;
