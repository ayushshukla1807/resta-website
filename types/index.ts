export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  category: string;
  subject: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  previewUrl?: string;
  uploadDate: string;
  rating: number;
  downloadCount: number;
  tags: string[];
  author: string;
  pages?: number;
  language: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  materialCount: number;
}

export interface SearchFilters {
  category?: string;
  subject?: string;
  level?: string;
  fileType?: string;
  query?: string;
}