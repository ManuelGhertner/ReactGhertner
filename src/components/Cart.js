import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { CustomContext } from "../context/CustomContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Cart = ({ setIdCompra }) => {
  const { cart } = useContext(CustomContext);
  const { removeProduct } = useContext(CustomContext);
  const { totalCarrito } = useContext(CustomContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handlerClickSell = () => {
    const sellCollection = collection(db, "Sells");
    addDoc(sellCollection, {
      items: cart,
      totalCarrito,
      time: serverTimestamp(),
    })
      .then((result) => {
        setIdCompra(result.id);
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {cart.length === 0 ? (
        <h1>
          Tu carrito esta vacio puedes adquirir productos
          <Link to={"/"}> ACA </Link>
        </h1>
      ) : (
        <>
          <div style={style.containerFijo}>
            <h2 style={style.nombre}></h2>
            <h2 style={style.nombre}>Producto</h2>
            <h2 style={style.nombre}>Precio</h2>
            <h2 style={style.nombre}>Cantidad</h2>
            <h2 style={style.nombre}>Subtotal</h2>
            <h2 style={style.nombre}></h2>
          </div>
          <div>
            {cart.map((producto) => {
              if (producto.cantidad >= producto.stock) {
                producto.cantidad = producto.stock;
              }
              return (  <>
                  <div style={style.container} key={producto.id}>
                    <img
                      style={style.image}
                      src={producto.image}
                      alt={producto.image}
                    />
                    <h1 style={style.nombre}>{producto.name}</h1>
                    <h1 style={style.nombre}>${producto.price}</h1>

                    <h1 style={style.nombre}>{producto.cantidad}</h1>
                    <h1 style={style.name}>
                      ${producto.cantidad * producto.price}
                    </h1>

                    <Button
                      style={style.boton}
                      onClick={() => removeProduct(producto)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </>
              );
            })}
            <div>
              <h1 style={style.total}> Total: ${totalCarrito} </h1>

              <Button style={style.boton} onClick={() => handlerClickSell()}>
                Comprar
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottom: (1, "solid"),
  },
  containerFijo: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    justifyContent: "space-evenly",
    borderBottom: (1, "solid"),
  },
  boton: {
    color: "rgba(252,130,69,1)",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    marginRight: 40,
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "black",
    width: 100,
  },
  image: {
    width: 100,
    height: "10%",
    display: "flex",
    alignSelf: "center",
    margin: 20,
  },
  nombre: {
    marginRight: 40,
    marginTop: 40,
    marginBottom: 40,
    width: 100,
  },
  total: {
    marginLeft: 760,
    fontSize: 24,
  },
};

export default Cart;
