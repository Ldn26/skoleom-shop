
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Role = 'acheteur' | 'vendeur' ;

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  role: Role | null;
  hasHydrated: boolean;
  setUser: (user: User | null, token: string, role: Role) => void;
  clearUser: () => void;
  setHasHydrated: (v: boolean) => void;
  isAuthenticated: () => boolean;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      role: null,
      hasHydrated: false,
      setUser: (user, token, role) => set({ user, token, role }),
      clearUser: () => set({ user: null, token: null, role: null }),
      setHasHydrated: (v) => set({ hasHydrated: v }),
      isAuthenticated: () => !!get().token,    
      getToken: () => get().token,
      
    }),
    {
      name: 'user-store',
      partialize: (s) => ({ user: s.user, token: s.token, role: s.role }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    },
  ),
);