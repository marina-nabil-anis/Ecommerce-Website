import React, { createContext, useState, useContext } from "react";

// إنشاء Context للسلة
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // تحديث العدد إذا كان المنتج موجودًا
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      // إضافة منتج جديد إلى السلة
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart  }}>
      {children}
    </CartContext.Provider>
  );
};
