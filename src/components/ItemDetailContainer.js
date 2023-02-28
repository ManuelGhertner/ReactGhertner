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
    const [detail, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

   
    useEffect(()=>{
        DetailPromise
        .then((data) => {
            console.log(data);
        setDetails(data.find(detailProduct => (detailProduct.id === (parseInt(id) ))));
        console.log(data); 
        setLoading(false);
  
        })
        .catch((err)=>{
            
            console.error(err);
        })
       
    }, []);


    // useEffect( () => {
    //     if (loading){
    //         setTimeout( () => {
    //             setLoading(true);
    //         },2000);
    //     }
    //    },[loading]);
    //    console.log(loading)
    return(
        <>  
        {!loading ?  (<ItemDetail detail={detail} />) : (<h1>Cargando...</h1>)}


        </>
       
    )
}



export default ItemDetailContainer;