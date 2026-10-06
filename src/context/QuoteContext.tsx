import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import type { MissionProfile } from '../data/missions';
import type { CartItem } from '../utils/whatsapp';

interface QuoteContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addMissionBundle: (mission: MissionProfile) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  selectedProductModal: Product | null;
  setSelectedProductModal: (product: Product | null) => void;
  totalItemsCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 't365_quote_cart_v1';

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return [];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const addMissionBundle = (mission: MissionProfile) => {
    const productsToAdd = PRODUCTS.filter((p) =>
      mission.recommendedProductIds.includes(p.id)
    );

    setItems((prev) => {
      const next = [...prev];
      productsToAdd.forEach((product) => {
        const idx = next.findIndex((item) => item.product.id === product.id);
        if (idx > -1) {
          next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        } else {
          next.push({ product, quantity: 1 });
        }
      });
      return next;
    });

    setIsDrawerOpen(true);
  };

  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        addMissionBundle,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedProductModal,
        setSelectedProductModal,
        totalItemsCount,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export function useQuote(): QuoteContextType {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
