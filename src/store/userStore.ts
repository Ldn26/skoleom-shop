
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
  role: Role | null;
  hasHydrated: boolean;
  setUser: (user: User | null , role: Role) => void;
  clearUser: () => void;
  setHasHydrated: (v: boolean) => void;
   logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      role: null,
      hasHydrated: false,
      setUser: (user, role) => set({ user, role }),
      clearUser: () => set({ user: null, role: null }),
      setHasHydrated: (v) => set({ hasHydrated: v }),
      logout: () => {
        set({ user: null, role: null });
        if (typeof window !== 'undefined') {
          window.location.href = '/connexion';
        }
      },
    }),
    {
      name: 'user-store',
      partialize: (s) => ({ user: s.user, role: s.role }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    },
  ),
);