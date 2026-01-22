export type UserRole = 'admin' | 'client';

export type ProductCategory = 'education' | 'creative' | 'corporate' | 'innovation';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  imageUrl?: string; // Para futuras imagenes
  url?: string;
  status: 'active' | 'beta' | 'development';
  category: ProductCategory;
}

export interface ClientPortal {
  id: string;
  name: string;
  url: string;
  type: 'management' | 'lms' | 'analytics';
}

export interface ClientCompany {
  id: string;
  name: string;
  website?: string;
  logo?: string; // Initials or URL
  description?: string;
  portals: ClientPortal[]; // Los portales exclusivos del cliente
  assignedProducts: string[]; // IDs de productos Aiwis asignados (ej: EduStudio)
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password?: string; // Opcional para demo users
  companyId?: string;
  avatar?: string;
}