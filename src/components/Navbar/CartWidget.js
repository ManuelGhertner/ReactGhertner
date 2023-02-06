import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { display } from "@mui/system";

const CartWidget = () =>{
    const cantidad = 6
    return (
        <>
        <a href="" style={style.carrito}>
            <h2 style={style.cantidad}>{cantidad}</h2>
            <ShoppingCartIcon sx={{ fontSize: 40 }} />         
        </a>
  
        </>
   
    )
    
}
const style = {
    carrito:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        color: "black"
    },
    cantidad:{
        fontSize: 32,
        paddingRight: 10
    },

}
export default CartWidget