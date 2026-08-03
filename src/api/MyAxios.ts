// import axios from 'axios';
// import { useUserStore } from '../store/userStore';

// const BASE_URL = process.env.NEXT_PUBLIC_SESYNC_URL ?? '/api';

// let refreshPromise: Promise<string | null> | null = null;

// async function runRefresh(): Promise<string | null> {
//   try {
//     const res = await axios.post(`${BASE_URL}/auth/refreshToken`, {}, { withCredentials: true });
//     const newToken = res.data?.data?.jwt ?? null;
//     if (newToken) {
//       const { user, role } = useUserStore.getState();
//       if (role) useUserStore.getState().setUser(user, role);
//     }
//     return newToken;
//   } catch {
//     return null;
//   }
// }

// function refreshTokenOnce(): Promise<string | null> {
//   if (!refreshPromise) {
//     refreshPromise = runRefresh().finally(() => {
//       refreshPromise = null;
//     });
//   }
//   return refreshPromise;
// }

// let redirecting = false;

// const createAxiosInstance = () => {
//   const instance = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
//   });

//   instance.interceptors.request.use((config) => {
//     const token = useUserStore.getState().token;
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   });

//   instance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       if (
//         !originalRequest ||
//         originalRequest._retry ||
//         originalRequest.url?.includes('/auth/refreshToken') ||
//         error.response?.status !== 401
//       ) {
//         return Promise.reject(error);
//       }

//       originalRequest._retry = true;
//       const newToken = await refreshTokenOnce();

//       if (newToken) {
//         originalRequest.headers = originalRequest.headers ?? {};
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return instance(originalRequest);
//       }

//       const { token, setHasHydrated } = useUserStore.getState() as any;
//       const hadSession = !!token;
//       const hydrated = useUserStore.getState().hasHydrated;

//       if (hadSession && hydrated && !redirecting) {
//         redirecting = true;
//         useUserStore.getState().clearUser();
//         if (typeof window !== 'undefined' && !window.location.pathname.includes('/connection')) {
//           window.location.href = '/fr/connection';
//         }
//       }
//       void setHasHydrated;
//       return Promise.reject(error);
//     },
//   );

//   return instance;
// };

// const BackRoute = createAxiosInstance();
// const ShopRoute = createAxiosInstance();
// const SesyncRoute = createAxiosInstance();

// export { BackRoute, ShopRoute, SesyncRoute };

import axios from 'axios';
import { useUserStore } from '../store/userStore';

// Keep RELATIVE ('/api') so cookies are always same-origin.
const BASE_URL = process.env.NEXT_PUBLIC_SESYNC_URL ?? '/api';

// Cookie-only: refresh just re-sets the httpOnly cookies server-side.
// We only need to know whether it succeeded (true) or not (false).
let refreshPromise: Promise<boolean> | null = null;

async function runRefresh(): Promise<boolean> {
  try {
    const res = await axios.post(`${BASE_URL}/auth/refreshToken`, {}, { withCredentials: true });
    return res.data?.success === true;
  } catch {
    return false;
  }
}

function refreshTokenOnce(): Promise<boolean> {
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
    withCredentials: true, // sends the httpOnly auth cookies on every request
  });

  // No request interceptor: auth travels via the httpOnly cookie, not a Bearer header.

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

      // A single shared refresh: the server re-sets the cookies. If it worked,
      // just replay the original request (the new cookie goes along automatically).
      const ok = await refreshTokenOnce();
      if (ok) {
        return instance(originalRequest);
      }

      // Refresh failed → the session is over. Only tear down if we thought we were
      // logged in (a user in the store) and the store is hydrated.
      const { user, hasHydrated } = useUserStore.getState();
      if (user && hasHydrated && !redirecting) {
        redirecting = true;
        useUserStore.getState().clearUser();
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/connection')) {
          window.location.href = '/fr/connection';
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

const BackRoute = createAxiosInstance();
const ShopRoute = createAxiosInstance();
const SesyncRoute = createAxiosInstance();

export { BackRoute, ShopRoute, SesyncRoute };
