export type UserRole = 'admin' | 'client';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  imageUrl?: string;
  status: 'active' | 'beta' | 'development';
}

export interface ClientCompany {
  id: string;
  name: string;
  website?: string;
  logo?: string;
  description?: string;
  assignedProducts: string[]; // IDs de productos asignados
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password?: string; // Solo para simulación de auth
  companyId?: string; // Relación con ClientCompany
  avatar?: string;
}
