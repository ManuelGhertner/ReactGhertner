import React from "react"; 
import Button from '@mui/material/Button';

const ItemDetail = ({detail}) =>{
  console.log(detail);
    return(
      <>
      <article style = {style.container}>
      <img style = {style.image} src={detail.image} alt={detail.image} />
      <div style = {style.details}>
          <h2 style = {style.name}>{detail.nombre}</h2>
          <h3 style = {style.descripcion}>{detail.descripcion}</h3>
          <p style = {style.precio}>${detail.precio}</p>
          <Button style = {style.boton} variant="contained">Agregar al carrito</Button>

        </div>

       
      </article>
      </> 
    )
}

const style = {
    container:{
      display: "flex",
      maxWidth: 1200,
      marginTop: 40,
      border: (1, "solid"),
    },
    image:{
      width:"40%",
      height: "40%",
      display:"flex",
      alignSelf: "center",
      marginTop: 20,
      marginLeft:20,
      marginBottom: 20,
  },
  name:{
    marginTop: 20,
    fontSize: 30,
  },
  details:{
    marginLeft:20,
  },
  descripcion:{
    fontSize: 24,
  },
  precio:{
    fontSize: 30,
  },
  boton:{
    color:"rgba(252,130,69,1)",
    fontSize: 16,
    display:"flex",
    width: "60%",
    justifyContent:"center",
    alignSelf:"center",
    marginBottom:20,
    backgroundColor: "black"
}
  
}


export default ItemDetail;

 