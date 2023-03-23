import React, { createContext, useState, useEffect } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productsCant, setProductsCant] = useState(0);
  const [totalCarrito, setTotalCarrito]= useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (previous, current) => previous + current.cantidad * current.price,
      0,
     
    );
   setTotalCarrito(total)
    setProductsCant(
      cart.reduce((previous, current) => previous + current.cantidad, 0)
    );
  }, [cart]);

  console.log(cart);
  const addProduct = (product, cantidad) => {
    const isInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );
    if (isInCart) {
      setCart(
        cart.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...isInCart, cantidad: isInCart.cantidad + cantidad };
          } else return productInCart;
        })
      );
    } else {
      setCart([...cart, { ...product, cantidad }]);
    }
  };
  const removeProduct = (product) => {
    const isInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (isInCart.cantidad === 1) {
      setCart(cart.filter((productInCart) => productInCart.id !== product.id));
    } else {
      setCart(
        cart.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...isInCart, cantidad: isInCart.cantidad - 1 };
          } else return productInCart;
        })
      );
    }
  };
const resetCart = () =>{
  setCart([]);
}
  return (
    <CustomContext.Provider
      value={{ cart, addProduct, removeProduct, productsCant, totalCarrito, resetCart }}
    >
      {children}
    </CustomContext.Provider>
  );
};
