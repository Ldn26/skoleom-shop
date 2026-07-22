import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SesyncRoute } from './MyAxios';

export interface VendeurProduct {
  id: number;
  name: string;
  slug?: string;
  status?: string;
  price?: string;
  regular_price?: string;
  stock_status?: string;
  images?: Array<{ src: string }>;
}

export interface ProductsResponse {
  data: VendeurProduct[];
  meta: { total: number; page: number; per_page: number; total_pages: number };
}

export interface VendeurOrder {
  id: number;
  number: string;
  status: string;
  total: string;
  currency: string;
  date_created: string;
  billing?: { first_name?: string; last_name?: string; email?: string };
  line_items?: Array<{ id: number; name: string; quantity: number; total: string }>;
}

export interface VendeurReview {
  id: number;
  product_id: number;
  reviewer: string;
  review: string;
  rating: number;
  date_created: string;
  status: string;
}

export function useVendeurProducts(params: Record<string, string | number> = {}) {
  return useQuery({
    queryKey: ['vendeur', 'products', params],
    queryFn: async () => {
      const { data } = await SesyncRoute.get<ProductsResponse>('/vendeur/products', { params });
      return data;
    },
  });
}

export function useVendeurOrders(params: Record<string, string | number> = {}) {
  return useQuery({
    queryKey: ['vendeur', 'orders', params],
    queryFn: async () => {
      const { data } = await SesyncRoute.get<VendeurOrder[]>('/vendeur/orders', { params });
      return Array.isArray(data) ? data : [];
    },
  });
}


export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Record<string, unknown>) => {
      const { data } = await SesyncRoute.post('/vendeur/products', body);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vendeur', 'products'] });
    },
  });
}
