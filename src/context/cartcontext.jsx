import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      let storedCarts = await AsyncStorage.getItem("carts");
      storedCarts = storedCarts ? JSON.parse(storedCarts) : [];
      setCarts(storedCarts);
      totalsum(storedCarts)
    } catch (error) {
      console.error("Failed to load cart items:", error);
    }
  };

  const addToCart = async (item) => {
    try {
      const itemExist = carts.findIndex((cart) => cart.id === item.id);
      if (itemExist === -1) {
        const newCartItems = [...carts, item];
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
        setCarts(newCartItems);
        totalsum(newCartItems);
      }
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const deleteItemFromCart = async (item) => {
    const newItems = carts.filter((carts) => carts.id !== item.id);
    setCarts(newItems);
    await AsyncStorage.setItem("carts", JSON.stringify(newItems))
    totalsum(newItems)
  }

  const totalsum = (carts) => {
    const total = carts.reduce((amount, item) => amount + item.price, 0);
    setTotalprice(total);
  }

  const value = {
    carts,
    addToCart,
    totalprice,
    deleteItemFromCart
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
