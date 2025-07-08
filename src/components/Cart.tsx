import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: items } });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Modal */}
      <Card className="relative w-full max-w-md max-h-[80vh] overflow-hidden bg-card shadow-warm border-border animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Shopping Cart ({itemCount})
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-0">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some delicious mochi to get started!</p>
              <Button onClick={onClose} variant="elegant">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="max-h-96 overflow-y-auto p-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-background/50 rounded-lg p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground truncate">{item.name}</h4>
                      <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              
              {/* Cart Footer */}
              <div className="border-t border-border p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total:</span>
                  <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;