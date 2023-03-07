import React, {useContext} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { display } from "@mui/system";
import { CustomContext } from "../../context/CustomContext";

const CartWidget = () =>{

    const { productsCant } = useContext(CustomContext);
    return (
        <>
        <a href="" style={style.carrito}>

            {productsCant === 0? <h2 style={style.cero}>0</h2> :  <h2 style={style.cantidad}>{productsCant}</h2>}
           
            
            
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
    cero:{
        paddingRight: 10,
        fontSize: 32,
        opacity: 0,
    }

}
export default CartWidget