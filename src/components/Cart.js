import React, { useContext } from "react";

import { CustomContext } from "../context/CustomContext";

const Cart = () => {
  const { cart } = useContext(CustomContext);
//   const {isInCart} = useContext(CustomContext);
//   const {cant} = useContext(CustomContext);
  const {removeProduct} = useContext(CustomContext);
  const {addProduct} = useContext(CustomContext);
  const {cant} = useContext(CustomContext);


  return (
    <div>
      {cart.map((producto) => {
        return (
            <>
       
          <div key={producto.id}>
          <h1>{producto.nombre}</h1>
          <h1>{producto.precio}</h1>
          <h1>{producto.cantidad}</h1>
          <button onClick={() => removeProduct(producto)}>eliminar</button>
          </div> 
       

            
  
            </>
        )
      

      })}
      {console.log(cart)}
    </div>
  );
};

export default Cart;
