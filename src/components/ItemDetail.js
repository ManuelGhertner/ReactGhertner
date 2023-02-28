import React from "react"; 


const ItemDetail = ({detail}) =>{
  console.log(detail);
    return(
      <>
     
        <h1> hola {detail.nombre}</h1>
      </> 
    )
}

export default ItemDetail;

 