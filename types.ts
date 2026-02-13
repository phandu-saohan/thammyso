export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  location?: string;
}

export interface Clinic {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  tags: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  isNew?: boolean;
}

export interface Feature {
  icon: string;
  text: string;
}