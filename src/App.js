import React, {useEffect, useState} from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CustomProvider } from "./context/CustomContext";
import CheckOut from "./components/CheckOut";
import Router from "./components/Router";
const App = () =>{

    return(

        <>
            <BrowserRouter>
           
            <Router/>
          
            </BrowserRouter>
        </>
    )
}

export default App;

 


