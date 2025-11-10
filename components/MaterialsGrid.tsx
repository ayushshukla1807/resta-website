import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Link as LinkIcon } from "lucide-react";

// Define StudyMaterial type
export interface StudyMaterial {
  id: number;
  title: string;
  subject: string;
  type: string;
  university: string;
  uploader: string;
  fileUrl?: string;
  thumbnailUrl?: string;
}

// ✅ Include viewMode here
export interface MaterialsGridProps {
  materials: StudyMaterial[];
  viewMode: "grid" | "list";
}

const MaterialsGrid: React.FC<MaterialsGridProps> = ({ materials, viewMode }) => {
  if (!materials || materials.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No materials available.
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 transition-all duration-300 ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      }`}
    >
      {materials.map((material) => (
        <Card
          key={material.id}
          className="rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
        >
          <CardContent
            className={`p-4 flex ${
              viewMode === "grid" ? "flex-col" : "flex-row items-center"
            } gap-4`}
          >
            {/* Thumbnail */}
            {material.thumbnailUrl ? (
              <img
                src={material.thumbnailUrl}
                alt={material.title}
                className={`rounded-xl object-cover ${
                  viewMode === "grid" ? "w-full h-40" : "w-24 h-24"
                }`}
              />
            ) : (
              <div
                className={`flex items-center justify-center bg-gray-100 rounded-xl text-gray-400 ${
                  viewMode === "grid" ? "w-full h-40" : "w-24 h-24"
                }`}
              >
                <BookOpen className="w-8 h-8" />
              </div>
            )}

            {/* Info */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {material.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {material.subject} • {material.type}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {material.university} — Uploaded by {material.uploader}
                </p>
              </div>

              {material.fileUrl && (
                <a
                  href={material.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  <LinkIcon className="w-4 h-4 mr-1" /> View Material
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MaterialsGrid;
