export type UserRole = 'admin' | 'client';

export type ProductCategory = 'education' | 'creative' | 'corporate' | 'innovation';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  imageUrl?: string;
  url?: string;
  status: 'active' | 'beta' | 'development';
  category: ProductCategory; // Nueva categorización estricta
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
  logo?: string;
  description?: string;
  portals: ClientPortal[]; // Los portales exclusivos del cliente
  assignedProducts: string[]; // IDs de productos Aiwis asignados (ej: EduStudio)
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password?: string;
  companyId?: string;
  avatar?: string;
}