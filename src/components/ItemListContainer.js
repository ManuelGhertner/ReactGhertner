import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";




// const initialProducts =[
//     // {name:"Pala de acero", id:0, price: 10000, stock: 25, category:"parrilla",image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/102/583/products/pala-brasas-parrilla-asado-asador-herencia-grill-tienda-pepino-31-06ff72fee4f0354d9116190416520298-640-0.webp" },
//     {name:"Atizador de acero", id:1, price: 8000, stock: 20, category:"parrilla", image:"https://parrillasburger.com.ar/wp-content/uploads/2021/08/IMG_5684-450x600.jpg"},
//     {name:"cepillo de acero", id:2, price: 8000, stock: 15, category:"parrilla", image: "https://www.lavacatuerta.com/images/productos/acc-parrillas-cocina/para-parrilla/manipular-fuego/utensilios-fuego/1_HUI012_cepillo.jpg"},
// ]

// const itemPromise = new Promise ((res,rej)=>{
//     setTimeout(() =>{
//         res(initialProducts);
//     }, 2000);
   
//     // rej("ERROR");
// })

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {name} = useParams();
   
    console.log(name)
    useEffect(()=>{
        if (name) {
          const productsCollection = collection(db, "products");
          const q =query(productsCollection,where("category","==", name));
          getDocs(q).then((data) => {
            const list = data.docs.map(product => {
              return{
                  ...product.data(),
                  id: product.id
              }
            })
          //    (name ===  undefined) ? setProducts(list) : setProducts(list.filter(initialProducts => (initialProducts.category === name)));
        
          // setLoading(false);
            setProducts(list);
            console.log(list);
          })
          .catch(()=>{setError(true) })
      
        }else{
          const productsCollection = collection(db, "products");
          getDocs(productsCollection).then((data) => {
            const list = data.docs.map(product => {
              return{
                  ...product.data(),
                  id: product.id
              }
            })
          //    (name ===  undefined) ? setProducts(list) : setProducts(list.filter(initialProducts => (initialProducts.category === name)));
        
          // setLoading(false);
            setProducts(list);
            console.log(list);
          })
          .catch(()=>{setError(true) })
        }





        // itemPromise
        // .then((data)=>{
        
       
        // })
        // .catch((err)=>{
        //     console.error(err);
        // })
    }, [name]);



    return(
        <>
        <h1 style={style.bienvenida}>{greeting}</h1>


        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>




        {/* {!loading ?  (<ItemList products={products}/>) : (<h1>Cargando...</h1>)} */}
            
        </>
    );

}

const style ={
    bienvenida:{
        fontSize: 24,
    }
}


export default ItemListContainer;