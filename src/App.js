import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CustomProvider } from "./context/CustomContext";
import CheckOut from "./components/CheckOut";

const App = () =>{
    return(
        <>
            <BrowserRouter>
                <CustomProvider>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting = "Bienvenidos al mundo del Asado!"/>}/>
                    <Route path="/carrito" element={<Cart/>}/>
                    <Route path="/categories/:name" element={<ItemListContainer greeting = "Bienvenidos al mundo del Asado!"/>}/>
                    <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/categories/:name/product/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/checkout" element={<CheckOut/>}/>               
                </Routes>
                </CustomProvider>   
            </BrowserRouter>
        </>
    )
}

export default App;

 


