import { lightGreen } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomContext } from "../context/CustomContext";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/firebase";
import { getDoc,doc, collection, query, where } from "firebase/firestore";


// const detailProduct = [
  // {
  //   id: 0,
  //   nombre: "Pala de Acero",
  //   precio: 10000,
  //   stock: 5,
  //   cantidad: 0,
  //   descripcion:
  //     "Pala de acero inoxidable de larga duracion con absoulta resistencia a altas temperaturas y con mango de madera barnizado.",
  //   image:
  //     "http://d3ugyf2ht6aenh.cloudfront.net/stores/102/583/products/pala-brasas-parrilla-asado-asador-herencia-grill-tienda-pepino-31-06ff72fee4f0354d9116190416520298-640-0.webp",
  // },
//   {
//     id: 1,
//     nombre: "Atizador de Acero",
//     precio: 8000,
//     stock: 7,
//     cantidad: 0,
//     descripcion:
//       "Atizador de acero inoxidable resistente a altas temperaturas y con mango de madera barnizado.",
//     image:
//       "https://parrillasburger.com.ar/wp-content/uploads/2021/08/IMG_5684-450x600.jpg",
//   },
//   {
//     id: 2,
//     nombre: "Cepillo de Acero",
//     precio: 8000,
//     stock: 8,
//     cantidad: 0,
//     descripcion:
//       "Cepillo de acero inoxidable con escobilla de larga duracion y dureza y con mango de madera barnizado.",
//     image:
//       "https://www.lavacatuerta.com/images/productos/acc-parrillas-cocina/para-parrilla/manipular-fuego/utensilios-fuego/1_HUI012_cepillo.jpg",
//   },
// ];

// const DetailPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(detailProduct);
//   }, 2000);

//   // rej("ERROR");
// });

const ItemDetailContainer = () => {
  const [detail, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {



    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id)
    getDoc(refDoc).then((data) => {
    
     console.log({
      cantidad: 0,
      id:data.id,
      ...data.data(),
     
     });

     const item = {...data.data(), id:data.id, cantidad:data.cantidad}




     setDetails(item)
   
      })
      // setDetails(
      //   data.find((detailProduct) => detailProduct.id === parseInt(id))
      // );
      // console.log(list);
    
    // .catch(()=>{setError(true) })

    console.log(detail);



    // DetailPromise.then((data) => {
    //   console.log(data);
    
    //   console.log(data);
   
    // }).catch((err) => {
    //   console.error(err);
    // });
  }, []);

  return (
    // <>{!loading ? /> : <h1>Cargando...</h1>}</>
    <ItemDetail detail={detail} />
  );
};

export default ItemDetailContainer;
