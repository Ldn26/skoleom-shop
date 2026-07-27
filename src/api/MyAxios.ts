import axios from 'axios';
import { useUserStore } from '../store/userStore';

// Keep this RELATIVE ('/api') so signin/refresh/middleware share ONE origin
// and the auth cookies are always sent. An absolute localhost URL breaks cookies
// when the page is opened on a different origin (127.0.0.1 vs localhost, LAN IP…).
const BASE_URL = process.env.NEXT_PUBLIC_SESYNC_URL ?? '/api';

let refreshPromise: Promise<string | null> | null = null;

async function runRefresh(): Promise<string | null> {
  try {
    const res = await axios.post(`${BASE_URL}/auth/refreshToken`, {}, { withCredentials: true });
    const newToken = res.data?.data?.jwt ?? null;
    if (newToken) {
      const { user, role } = useUserStore.getState();
      if (role) useUserStore.getState().setUser(user, newToken, role);
    }
    return newToken;
  } catch {
    return null;
  }
}

function refreshTokenOnce(): Promise<string | null> {
  if (!refreshPromise) {
    refreshPromise = runRefresh().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

let redirecting = false;

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  instance.interceptors.request.use((config) => {
    const token = useUserStore.getState().token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        !originalRequest ||
        originalRequest._retry ||
        originalRequest.url?.includes('/auth/refreshToken') ||
        error.response?.status !== 401
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;
      const newToken = await refreshTokenOnce();

      if (newToken) {
        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return instance(originalRequest);
      }

      // Refresh failed. ONLY tear down the session if we actually had one AND the
      // store has finished hydrating — otherwise a background/early 401 would wrongly
      // wipe the token and bounce the user to /connection.
      const { token, setHasHydrated } = useUserStore.getState() as any;
      const hadSession = !!token;
      const hydrated = useUserStore.getState().hasHydrated;

      if (hadSession && hydrated && !redirecting) {
        redirecting = true;
        useUserStore.getState().clearUser();
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/connection')) {
          window.location.href = '/fr/connection';
        }
      }
      void setHasHydrated;
      return Promise.reject(error);
    },
  );

  return instance;
};

const BackRoute = createAxiosInstance();
const ShopRoute = createAxiosInstance();
const SesyncRoute = createAxiosInstance();

export { BackRoute, ShopRoute, SesyncRoute };