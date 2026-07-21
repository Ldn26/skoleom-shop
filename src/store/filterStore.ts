
import { create } from 'zustand';

export type SortOption = 'reco' | 'price-asc' | 'price-desc' | 'newest';

export interface Filters {
  selectedCategory: string;
  brands: string[];
  search: string;
  sort: SortOption;
  maxPrice: number;
  inStockOnly: boolean;
  onSaleOnly: boolean;
  priceTouched: boolean;
  parent: number;
}

interface FilterStore extends Filters {
  setSearch: (search: string) => void;
  setSort: (sort: SortOption) => void;
  setMaxPrice: (maxPrice: number) => void;
  setCategory: (category: string) => void;
  clearCategory: () => void;
  getCategory: () => string;
  toggleBrand: (brand: string) => void;
  toggleInStock: () => void;
  toggleOnSale: () => void;
  setParent: (parent: number) => void;
  patch: (values: Partial<Filters>) => void;
  reset: () => void;
}

const initialFilters: Filters = {
  selectedCategory: '',
  brands: [],
  search: '',
  sort: 'reco',
  maxPrice: 2000,
  inStockOnly: false,
  onSaleOnly: false,
  priceTouched: false,
  parent: 0,
};

export const useFilterStore = create<FilterStore>((set, get) => ({
  ...initialFilters,
  setSearch: (search) => set({ search }),
  setSort: (sort) => set({ sort }),
  setParent: (parent) => set({ parent }),
  setMaxPrice: (maxPrice) => set({ maxPrice, priceTouched: true }),
  setCategory: (category) => set({ selectedCategory: category }),
  clearCategory: () => set({ selectedCategory: '' }),
  getCategory: () => get().selectedCategory || 'all',
  toggleBrand: (brand) =>
    set((state) => ({
      brands: state.brands.includes(brand)
        ? state.brands.filter((b) => b !== brand)
        : [...state.brands, brand],
    })),
  toggleInStock: () => set((state) => ({ inStockOnly: !state.inStockOnly })),
  toggleOnSale: () => set((state) => ({ onSaleOnly: !state.onSaleOnly })),
  patch: (values) => set(values),
  reset: () => set(initialFilters),
}));