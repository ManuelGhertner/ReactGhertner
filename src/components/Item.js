import React from "react";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
const Item = ({product}) =>{
    return(
            <Link to={"product/${id}" } style = {style.card} >
                <img style = {style.image} src={product.image} alt={product.name} />
                <h3 style = {style.nombre}>{product.name}</h3>
                <p style = {style.precio}>${product.price}</p>
                <Button style = {style.boton} variant="contained">Agregar al carrito</Button>
            </Link>
    )
}


const style = {
    image:{
        width:"80%",
        height: "80%",
        display:"flex",
        alignSelf: "center",
        marginTop: 20,
    },
    card:{
        display: "flex",
        flexDirection: "column",
        maxWidth:"30%",
        marginLeft:20,
        marginTop: 20,
        border: (1, "solid"),
        color: "black",
    },
    nombre:{
        display:"flex",
        marginLeft:20,
        fontSize: 24,
        marginBottom: 10,
    },
    precio:{
        fontSize: 24,
        marginLeft:20,
        marginTop:10,
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

export default Item