// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { BackRoute, SesyncRoute } from './MyAxios';
// import {useUserStore} from '../store/userStore';
// export interface AuthResponse {
//   success: boolean;
//   data: {
//     jwt: string;
//   };
// }

// export interface SignInPayload {
//   email: string;
//   password: string;
// }
// export interface SignUpPayload {
//   name: string;
//   email: string;
//   password: string;
// }

// /* ----------------------------- VENDEUR (WP / Sesync only) ----------------------------- */

// export const useSignInVendeur = () =>
//   useMutation<AuthResponse, Error, SignInPayload>({
//     mutationFn: async (payload) => {
//       const { data } = await SesyncRoute.post<AuthResponse>('/api/auth/signin', payload);
//       return data;
//     },
//     onSuccess: (res) => {
//       if (res.success) {
//         useUserStore.getState().setUser(null, res.data.jwt, 'vendeur');
//       }
//     },
//   });

// export const useSignUpVendeur = () =>
//   useMutation<AuthResponse, Error, SignUpPayload>({
//     mutationFn: async (payload) => {
//       const { data } = await SesyncRoute.post<AuthResponse>('/api/auth/signup', payload);
//       return data;
//     },
//     onSuccess: (res) => {
//       if (res.success)
// useUserStore.getState().setUser(null, res.data.jwt, 'vendeur')
//     },
//   });

// export const useSignUpAchteur = () =>
//   useMutation<AuthResponse, Error, SignUpPayload>({
//     mutationFn: async (payload) => {
//       const { data } = await BackRoute.post<AuthResponse>('/api/auth/signup', payload);
//       return data;
//     },
//     onSuccess: (res) => {
//       if (res.success) {
//         useUserStore.getState().setUser(null, res.data.jwt, 'acheteur');
//       }
//     },
//   });

// export const useSignInAchteur = () =>
//   useMutation<AuthResponse, Error, SignInPayload>({
//     mutationFn: async (payload) => {
//       const { data } = await BackRoute.post<AuthResponse>('/api/auth/signin', payload);
//       return data;
//     },
//     onSuccess: (res) => {
//       if (res.success) {
//         useUserStore.getState().setUser(null, res.data.jwt, 'acheteur');
//       }
//     },
//   });

// export const useSignOut = () => {
//   const queryClient = useQueryClient();
//   return useMutation<void, Error, void>({
//     mutationFn: async () => {
//       try {
//         await BackRoute.post('/api/auth/logout', {}, { withCredentials: true });
//       } catch {

//       }
//     },
//     onSettled: () => {
//      useUserStore.getState().clearUser();
//       queryClient.clear();
//     },
//   });
// };

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BackRoute } from './MyAxios';
import { useUserStore } from '../store/userStore';

export interface AuthResponse {
  success: boolean;
  data: {
    jwt: string;
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
    };
  };
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  role: 'acheteur' | 'vendeur';
}

export const useSignIn = () =>
  useMutation<AuthResponse, Error, SignInPayload>({
    mutationFn: async (payload) => {
      const { data } = await BackRoute.post<AuthResponse>('/auth/signin', payload);

      return data;
    },
  });

export const useSignUp = () =>
  useMutation<AuthResponse, Error, SignUpPayload>({
    mutationFn: async (payload) => {
      const { data } = await BackRoute.post<AuthResponse>('/auth/signup', payload);

      return data;
    },
  });

export const useSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, void>({
    mutationFn: async () => {
      await BackRoute.post(
        '/auth/logout',
        {},
        {
          withCredentials: true,
        },
      );
    },

    onSettled: () => {
      useUserStore.getState().clearUser();

      queryClient.clear();
    },
  });
};
