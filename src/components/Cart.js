import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CustomContext } from "../context/CustomContext";

const Cart = () => {
  const { cart } = useContext(CustomContext);
  const { removeProduct } = useContext(CustomContext);
  const { addProduct } = useContext(CustomContext);

  const total = cart.reduce(
    (previous, current) => previous + current.cantidad * current.precio,
    0
  );


  return (
    <>
        {cart.length === 0 ? <h1>Tu carrito esta vacio puedes adiquirir productos <Link to={"/"} > ACA </Link></h1> :     
      <div>
    
        {cart.map((producto) => {
          if (producto.cantidad >= producto.stock) {
            producto.cantidad = producto.stock;
          }
          return (
            <>
               {console.log(cart.length)}
             <div key={producto.id}>
                <h1>{producto.nombre}</h1>
                <h1>{producto.precio}</h1>
             
                {producto.cantidad >= producto.stock ? (
                  <div>
                    <h1>{producto.stock}</h1>
                    <h1>Total: ${producto.stock * producto.precio}</h1>
                  </div>
                ) : (
                  <div>
                    <h1>{producto.cantidad}</h1>
                    <h1>
                      Total producto: ${producto.cantidad * producto.precio}
                    </h1>
                  </div>
                )}

                <button onClick={() => removeProduct(producto)}>
                  Eliminar
                </button>
              </div> 
         
            </>
          );
        })}
        {console.log(cart)}
      </div>}
      <div>
        <h1> Total: ${total} </h1>
      </div>
    </>
  );
};

export default Cart;
