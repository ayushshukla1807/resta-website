import React from "react";
import { StudyMaterial } from "@/types";
import { FileText, Download, Calendar, BookOpen } from "lucide-react";

export interface MaterialsGridProps {
  materials: StudyMaterial[];
  viewMode?: "grid" | "list"; // ✅ added this prop to fix build error
}

const MaterialsGrid: React.FC<MaterialsGridProps> = ({
  materials,
  viewMode = "grid",
}) => {
  if (!materials || materials.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No materials found.
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {materials.map((material) => (
          <div
            key={material.id}
            className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 flex justify-between items-center hover:bg-gray-900 transition-all"
          >
            <div className="flex items-center gap-4">
              <FileText className="text-green-500 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg text-white">
                  {material.title}
                </h3>
                <p className="text-gray-400 text-sm">{material.description}</p>
                <div className="text-gray-500 text-xs mt-1 flex gap-4">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> {material.subject}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Sem {material.semester}
                  </span>
                </div>
              </div>
            </div>
            <a
              href={material.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        ))}
      </div>
    );
  }

  // GRID VIEW
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (
        <div
          key={material.id}
          className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:bg-gray-900 transition-all group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-green-500 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors">
                  {material.title}
                </h3>
                <p className="text-gray-400 text-sm">{material.subject}</p>
              </div>
            </div>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
              Sem {material.semester}
            </span>
          </div>

          <p className="text-gray-400 text-sm mt-4 line-clamp-2">
            {material.description}
          </p>

          <div className="flex justify-end mt-6">
            <a
              href={material.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialsGrid;
