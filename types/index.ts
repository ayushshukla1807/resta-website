// /types/index.ts
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