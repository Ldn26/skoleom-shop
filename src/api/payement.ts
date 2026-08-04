import { useMutation, useQuery } from '@tanstack/react-query';
import { BackRoute } from './MyAxios';

export interface CheckoutResponse {
  url: string;
}

export interface Subscription {
  plan: string;
  status: 'active' | 'canceled' | 'past_due' | 'unpaid' | 'trailing';
  currentPeriodEnd: string;
  amount: number;
  currency: string;
}

export const useCreateCheckoutSession = () => {
  return useMutation<CheckoutResponse, Error, void>({
    mutationFn: async () => {
      const { data } = await BackRoute.post<CheckoutResponse>('/billing/checkout');
      return data;
    },
    onSuccess: (data) => {
      if (data?.url) {
        window.location.href = data.url;
      }
    },
  });
};

export const useGetSubscription = () => {
  return useQuery<Subscription | null>({
    queryKey: ['subscription'],
    queryFn: async () => {
      const { data } = await BackRoute.get('/billing/subscription');
      return data?.data ?? null;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};