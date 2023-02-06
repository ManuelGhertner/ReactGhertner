import React from "react"; // paso opcional, segun version
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";


const App = () =>{
    return(
        <>
            <Navbar/>
            <ItemListContainer greeting = "Bienvenidos al mundo del Asado!"/>
        </>
    )
}

export default App;

 


