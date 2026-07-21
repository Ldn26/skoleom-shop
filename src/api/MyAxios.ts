import axios from 'axios';
import { useUserStore } from '../store/userStore';

const BackRoute = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SESYNC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

BackRoute.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const ShopRoute = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SESYNC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

ShopRoute.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const SesyncRoute = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SESYNC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

SesyncRoute.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { BackRoute, ShopRoute, SesyncRoute };