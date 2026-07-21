/**
 * Modèles de données partagés entre contextes, pages et services API.
 */

export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
}

export interface Product {
  id: string;
  name?: string;
  brand?: string;
  description?: string;
  image?: string;
  price?: number;
  stock?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Order {
  id: string;
  status: string;
  total: number;
  items: CartItem[];
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
