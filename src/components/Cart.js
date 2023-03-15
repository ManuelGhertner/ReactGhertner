import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { CustomContext } from "../context/CustomContext";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import CheckOut from "./CheckOut";

const Cart = () => {
  const { cart } = useContext(CustomContext);
  const { removeProduct } = useContext(CustomContext);
  const { addProduct } = useContext(CustomContext);
  const [idCompra, setIdCompra] = useState("");
  const total = cart.reduce(
    (previous, current) => previous + current.cantidad * current.price,
    0
  );

  // const buyer = {
  //   name: "juan",
  //   apellido: "Perez",
  //   email: "juanperez@gmail.com",
  // };
  // useEffect(() => {
  //   const handlerClickSell = () => {
  //     const sellCollection = collection(db, "Sells");
  //     addDoc(sellCollection, {
  //       buyer,
  //       items: cart,
  //       total,
  //       time: serverTimestamp(),
  //     }).then((result) => console.log(result.id));
  //   };
  // }, []);
  // console.log(idCompra);
  // const handlerStock = () => {
  //   const docReference = doc(db, "products", "algun id");
  //   updateDoc(docReference, { stock: 50 });
  // // };
  // <CheckOut idCompra={idCompra} />;
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
              return (
                <>
                  {console.log(cart.length)}
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
              <h1 style={style.total}> Total: ${total} </h1>

              {/* <Link to="/checkout">
                <Button style={style.boton} onClick={handlerClickSell}>
                  Comprar
                </Button>
              </Link> */}
            </div>

            {console.log(cart)}
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
