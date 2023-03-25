import React, { useContext, useState } from "react";
import { CustomContext } from "../context/CustomContext";
import Button from "@mui/material/Button";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import swal from "sweetalert";

const CheckOut = ({ idCompra }) => {
  const { totalCarrito } = useContext(CustomContext);
  const { cart } = useContext(CustomContext);
  const { resetCart } = useContext(CustomContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [cantidades, setCantidades] = useState({});
  const [confirmMail, setConfirmMail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail !== confirmMail) {
      swal("ERROR!", "Los correos electrónicos no coinciden!", "error");
    } else {
      const cartDoc = doc(db, "Sells", idCompra);
      updateDoc(cartDoc, {
        nombre,
        apellido,
        mail,
        telefono,
      })
        .then(() => {
          console.log("Datos del usuario agregados al carrito");
          setNombre("");
          setApellido("");
          setMail("");
          setTelefono("");
        })
        .catch((error) => {
          console.error(error);
        });

      cart.forEach((producto) => {
        const refProduct = doc(db, "products", producto.id);
        getDoc(refProduct).then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const stockExistente = docSnapshot.data().stock;
            const cantidadAgregada = producto.cantidad;
            setCantidades(cantidadAgregada);
            const stockNuevo = stockExistente - cantidadAgregada;
            updateDoc(refProduct, { stock: stockNuevo }).catch((error) =>
              console.log(error)
            );
          }
        });
      });
      resetCart();
      const DetailPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      DetailPromise.then(() => {
        swal(
          "COMPRA REALIZADA! Seras redireccionado a la pagina principal en 5 segundos",
          `ID de la compra: ${idCompra} `,
          "success"
        );
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <h1>Complete sus datos:</h1>
      <form onSubmit={handleSubmit} style={style.form}>
        <label style={style.casillero}>
          Nombre:
          <input
            style={style.label}
            placeholder="Nombre"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label style={style.casillero}>
          Apellido:
          <input
            style={style.label}
            placeholder="Apellido"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>
        <label style={style.casillero}>
          Telefono:
          <input
            style={style.label}
            placeholder="telefono"
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>
        <label style={style.casillero}>
          email:
          <input
            style={style.label}
            placeholder="Email"
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <label style={style.casillero}>
          Confirmar Email:
          <input
            style={style.label}
            placeholder="Confirmar Email"
            type="text"
            id="confirm-mail"
            value={confirmMail}
            onChange={(e) => setConfirmMail(e.target.value)}
          />
        </label>
        <Button type="submit" style={style.boton}>
          {" "}
          Comprar
        </Button>
      </form>

      <h1 style={style.seleccionados}>Productos seleccionados:</h1>
      {cart.map((producto) => {
        return (
          <>
            <div style={style.container} key={producto.id}>
              <img
                style={style.image}
                src={producto.image}
                alt={producto.image}
              />
              <h1 style={style.nombre}>{producto.name}</h1>
              <h1 style={style.nombre}>${producto.price}</h1>

              <h1 style={style.nombre}>{producto.cantidad}</h1>
              <h1 style={style.name}>${producto.cantidad * producto.price}</h1>
            </div>
          </>
        );
      })}

      <h1>El total de su compra es: ${totalCarrito}</h1>
    </>
  );
};

const style = {
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  casillero: {
    fontSize: 20,
  },
  boton: {
    color: "rgba(252,130,69,1)",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    marginRight: 40,
    marginTop: 20,
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
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottom: (1, "solid"),
  },
  nombre: {
    marginRight: 40,
    marginTop: 40,
    marginBottom: 40,
    width: 100,
  },
  seleccionados: {
    borderBottom: (1, "solid"),
  },
};

export default CheckOut;
