import React, { useContext, useState } from "react";
import { CustomContext } from "../context/CustomContext";
import Cart from "./Cart";
import firebase from "firebase/app";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const CheckOut = ({ idCompra }) => {
  const { productsCant } = useContext(CustomContext);
  const { totalCarrito } = useContext(CustomContext);
  const { cart } = useContext(CustomContext);
  const { resetCart } = useContext(CustomContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const[cantidades, setCantidades] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartDoc = doc(db, "Sells", idCompra);
    updateDoc(cartDoc, {
      nombre,
      apellido,
      mail,
    })
      .then(() => {
        console.log("Datos del usuario agregados al carrito");
        setNombre("");
        setApellido("");
        setMail("");
      })
      .catch((error) => {
        console.error(error);
      });

      cart.forEach((producto)=>{
        const refProduct = doc(db,"products", producto.id);
        getDoc(refProduct).then((docSnapshot)=>{
          if(docSnapshot.exists()){
            const stockExistente = docSnapshot.data().stock;
            console.log(stockExistente);
            const cantidadAgregada = producto.cantidad;
            setCantidades(cantidadAgregada);
            console.log(producto.cantidad);
            const stockNuevo = stockExistente - cantidadAgregada;
            console.log(stockNuevo);
            updateDoc(refProduct,{stock: stockNuevo})
            .catch((error)=>console.log(error));
          }
        });
      });
      resetCart();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <button type="submit">Comprar</button>
      </form>
      <h1>{totalCarrito}</h1>
      <h1>{idCompra}</h1>
    </>
  );
};

export default CheckOut;
