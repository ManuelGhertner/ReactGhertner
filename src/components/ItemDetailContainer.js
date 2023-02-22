import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const DetailProduct = [
    {id:0, nombre: "Pala de Acero", precio: 10000, descripcion:"Pala de acero inoxidable de larga duracion con absoulta resistencia a altas temperaturas y con mango de madera barnizado." }
]


const DetailPromise = new Promise ((res,rej)=>{
    setTimeout(() =>{
        res(DetailProduct);
    }, 2000);
   
    // rej("ERROR");
})





const ItemDetailContainer = () =>{
    const [detail, setDetails] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        DetailPromise
        .then((data)=>{
        
         setDetails(data);

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