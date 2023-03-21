import React, {useEffect, useState} from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import { CustomProvider } from "../context/CustomContext";
import Cart from "./Cart";
import ItemListContainer from "./ItemListContainer";
import Navbar from "./Navbar/Navbar";
import ItemDetailContainer from "./ItemDetailContainer";
import CheckOut from "./CheckOut";
const Router = (()=>{
    const [idCompra, setIdCompra] = useState("");
      const navigate = useNavigate()
    useEffect(()=>{
        
        if (idCompra.length > 0) {
            navigate("/checkout")
        }
        console.log(idCompra,"validado en app");
                },[idCompra])
    return(
      <> 
       <CustomProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting = "Bienvenidos al mundo del Asado!"/>}/>
            <Route path="/carrito" element={<Cart setIdCompra ={setIdCompra}/>}/>
            <Route path="/categories/:name" element={<ItemListContainer greeting = "Bienvenidos al mundo del Asado!"/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/categories/:name/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/checkout" element={<CheckOut idCompra ={idCompra}/>}/>               
        </Routes>
        </CustomProvider>
        </>
    )
})

export default Router 