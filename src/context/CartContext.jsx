import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, name, price, quantity}

  const addItem = (product, quantity) => {
    setItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setItems([]);

  const totalUnits = useMemo(
    () => items.reduce((sum, p) => sum + p.quantity, 0),
    [items]
  );
  const totalPrice = useMemo(
    () => items.reduce((sum, p) => sum + p.quantity * p.price, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalUnits, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}