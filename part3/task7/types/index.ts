export interface Course {
  id?: number;
  title: string;
  description: string;
  categoryId: number | null;
}

export interface Category {
  id: number;
  name: string;
} 