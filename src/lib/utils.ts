import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




import { useUserStore } from "../store/userStore";

interface AuthUser {
  id: string;
  email: string;
  username: string;
  role?: string;
  exp?: number;
  [key: string]: unknown;
}

 














const getCurrentUserId = (): number | null => {
  const token = useUserStore.getState().token;
  if (!token) return null;
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(
      decodeURIComponent(
        atob(base64).split('').map(c =>
          '%' + c.charCodeAt(0).toString(16).padStart(2, '0')
        ).join('')
      )
    );
    return payload.id ?? null;
  } catch {
    return null;
  }
}



export { getCurrentUserId };








