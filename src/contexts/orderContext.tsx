import { useToast } from "@/hooks/use-toast";
import React, { createContext, useState } from "react";
import { Product } from "@/components/ProductCard";
import { CartItem } from "@/components/Cart";

export interface IOrderProps {
  addToCart: (product: Product) => void;
  cartCount: number;
  cartItems: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  //   orderId: string;
  //   orderProductNameArr: string[];
  //   orderArray: Array<IOrder>;
  //   total: number;
  //   setArray: ([]) => void;
  //   setTotal: (value: number) => void;
}
// Export context object
export const OrderContext = createContext<IOrderProps>({
  addToCart: (product: Product) => null,
  cartCount: 0,
  cartItems: [],
  updateQuantity: (productId: string, quantity: number) => null,
  removeItem: (productId: string) => null,
});

// Context wrapper component
export default function OrderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        toast({
          title: "Added to cart",
          description: `${product.name} quantity updated in your cart`,
        });
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
        });
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <OrderContext.Provider
      value={{
        addToCart,
        cartCount,
        cartItems,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
