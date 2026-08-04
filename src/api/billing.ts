import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BackRoute } from './MyAxios';

export interface SubscriptionData {
  id: number;
  amount: number;
  status: 'active' | 'canceled' | 'past_due' | 'unpaid' | 'incomplete';
  planRole: 'acheteur' | 'vendeur';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd?: boolean;
}

export const useSubscription = () =>
  useQuery<SubscriptionData | null>({
    queryKey: ['subscription'],
    queryFn: async () => {
      const { data } = await BackRoute.get('/subscription');
      return (data?.data ?? data) || null;
    },
    retry: false,
    staleTime: 60 * 1000,
  });

export const useCheckout = () =>
  useMutation<string, Error, void>({
    mutationFn: async () => {
      const { data } = await BackRoute.post('/billing/checkout', {});
      return data?.url as string;
    },
    onSuccess: (url) => {
      if (url && typeof window !== 'undefined') window.location.assign(url);
    },
  });

export const useCancelSubscription = () => {
  const qc = useQueryClient();
  return useMutation<unknown, Error, { resume?: boolean } | void>({
    mutationFn: async (payload) => {
      const { data } = await BackRoute.post('/billing/cancel', payload ?? {});
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['subscription'] }),
  });
};
