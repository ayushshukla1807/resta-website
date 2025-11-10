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
  viewMode: "grid" | "list";
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
        <Card
          key={material.id}
          className="hover:shadow-lg transition-shadow duration-200 bg-[#111111] border border-neutral-800"
        >
          <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {material.image && (
              <img
                src={material.image}
                alt={material.title}
                className={`${
                  viewMode === "grid"
                    ? "rounded-lg w-full h-40 object-cover"
                    : "rounded-lg w-24 h-24 object-cover"
                }`}
              />
            )}
            <div>
              <h3 className="text-lg font-semibold mb-1 text-white">{material.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{material.description}</p>
              <a
                href={material.fileUrl}
                className="text-blue-400 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Material
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MaterialsGrid;

