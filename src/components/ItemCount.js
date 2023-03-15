import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handlerAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handlerSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div style={style.container}>
        <div style={style.innerContainer}>
          <RemoveCircleIcon style={style.handlers} onClick={handlerSubstract}>
            -
          </RemoveCircleIcon>

          <h1 style={style.count}>{count}</h1>
          <AddCircleIcon style={style.handlers} onClick={handlerAdd}>
            +
          </AddCircleIcon>
        </div>
        <div style={style.contenedorBoton}>
          <Button
            style={style.boton}
            variant="contained"
            onClick={() => {
              onAdd(count);
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
};

const style = {
  count: {
    fontSize: 16,
    marginRight: 20,
    marginLeft: 20,
  },
  boton: {
    color: "rgba(252,130,69,1)",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "black",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "60%",
    border: (1, "solid"),
  },
  handlers: {
    alignSelf: "center",
    color: "black",
    fontSize: 24,
  },

  innerContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  contenedorBoton: {
    display: "flex",
    justifyContent: "center",
  },
};

export default ItemCount;
