import React from "react";
import parrilla from "../../assets/parrilla.png";

import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={style.container}>
      <Link style={style.logo} to="/">
        <img style={style.image} src={parrilla} alt="Icono tienda" />
        <h1 style={style.marca}>A la Parri</h1>
      </Link>
      <NavCategories />
      <Link to="/carrito">
        <CartWidget />
      </Link>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 1200,
    width: "100vw",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottom: (1, "solid"),
  },
  image: {
    width: 140,
    height: 140,
  },
  logo: {
    display: "flex",
    flexDirection: "row",
  },
  marca: {
    alignSelf: "center",
    padding: 20,
    color: "black",
    fontSize: 40,
  },
};

export default Navbar;
