import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { useUserStore } from '../store/userStore';

const getCurrentUserId = (): number | null => {
  return useUserStore.getState().user?.id ?? null;
};

export { getCurrentUserId };

export function GetCookiesFromRequest(request: Request): Record<string, string> {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return {};
  return Object.fromEntries(
    cookieHeader.split(';').map((cookie) => {
      const [name, ...rest] = cookie.trim().split('=');
      return [name, rest.join('=')];
    }),
  );
}
