// components/MaterialsGrid.tsx
import React from "react";
import { StudyMaterial } from "@/types";

export interface MaterialsGridProps {
  materials: StudyMaterial[];
  viewMode: "grid" | "list";
}

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ materials, viewMode }) => {
  if (!materials || materials.length === 0) {
    return <p className="text-gray-500">No materials available.</p>;
  }

  return (
    <div
      className={`grid ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "grid-cols-1 gap-4"
      }`}
    >
      {materials.map((material) => (
        <div
          key={material.id}
          className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-green-500 transition-all"
        >
          <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
          <p className="text-sm text-gray-400 mb-3">{material.description}</p>
          <div className="text-xs text-gray-500 mb-4">
            Category: {material.category} | Level: {material.level}
          </div>
          <a
            href={material.fileUrl}
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
