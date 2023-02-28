import { lightGreen } from "@mui/material/colors";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const detailProduct = [
    {id:0, nombre: "Pala de Acero", precio: 10000, descripcion:"Pala de acero inoxidable de larga duracion con absoulta resistencia a altas temperaturas y con mango de madera barnizado." },
    {id:1, nombre: "Atizador de Acero", precio: 10000, descripcion:"dfasdfasdfia a altas temperaturas y con mango de madera barnizado." }
]


const DetailPromise = new Promise ((res,rej)=>{
    setTimeout(() =>{
        res(detailProduct);
    }, 2000);
   
    // rej("ERROR");
})


       

const ItemDetailContainer = () =>{
    const [detail, setDetails] = useState([]);
    const {id} = useParams();

   
    useEffect(()=>{
        DetailPromise
        .then((data) => {
            console.log(data);
        setDetails(data.find(detailProduct => (detailProduct.id === id) ));
        console.log(data) 
  
        })
        .catch((err)=>{
            console.error(err);
        })
       
    }, []);

   


    return(
        <>  

         <ItemDetail detail={detail}/>

        </>
       
    )
}



export default ItemDetailContainer;