// components/MaterialsGrid.tsx
import React from "react";
import { StudyMaterial } from "@/types";

export interface MaterialsGridProps {
  materials: StudyMaterial[];
  viewMode: "grid" | "list";
}

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ materials, viewMode }) => {
  if (!materials?.length) {
    return <div className="text-gray-400 text-center py-12">No materials found</div>;
  }

  return (
    <div
      className={`grid ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "grid-cols-1 gap-4"
      }`}
    >
      {materials.map((m) => (
        <div
          key={m.id}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition-all"
        >
          <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
          <p className="text-gray-400 text-sm mb-3">{m.description}</p>
          <div className="text-xs text-gray-500 mb-4">
            {m.category} • {m.level} • {m.fileType}
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline text-sm"
          >
            View / Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default MaterialsGrid;

