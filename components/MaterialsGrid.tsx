// components/MaterialsGrid.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  subject: string;
  topic: string;
  image: string;
  fileUrl: string;
}

export interface MaterialsGridProps {
  materials: StudyMaterial[];
  viewMode: "grid" | "list"; // ✅ Added this line
}

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ materials, viewMode }) => {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {materials.map((material) => (
        <Card key={material.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <img
              src={material.image}
              alt={material.title}
              className="rounded-lg mb-3 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mb-1">{material.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{material.description}</p>
            <a
              href={material.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Material
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MaterialsGrid;
