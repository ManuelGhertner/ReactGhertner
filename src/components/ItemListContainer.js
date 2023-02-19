import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";




const initialProducts =[
    {name:"Pala de acero", id:0, price: 10000, stock: 25,image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/102/583/products/pala-brasas-parrilla-asado-asador-herencia-grill-tienda-pepino-31-06ff72fee4f0354d9116190416520298-640-0.webp" },
    {name:"Atizador de acero", id:1, price: 8000, stock: 20, image:"https://parrillasburger.com.ar/wp-content/uploads/2021/08/IMG_5684-450x600.jpg"},
    {name:"cepillo de acero", id:2, price: 8000, stock: 15, image: "https://www.lavacatuerta.com/images/productos/acc-parrillas-cocina/para-parrilla/manipular-fuego/utensilios-fuego/1_HUI012_cepillo.jpg"},
]

const itemPromise = new Promise ((res,rej)=>{
    setTimeout(() =>{
        res(initialProducts);
    }, 2000);
   
    // rej("ERROR");
})

const ItemListContainer = ({greeting}) => {



    const [products, setProducts] = useState([]);

    useEffect(()=>{
        itemPromise
        .then((data)=>{
            setProducts(data)
        })
        .catch((err)=>{
            console.error(err);
        })
    }, []);

    


    return(
        <>
        <h1 style={style.bienvenida}>{greeting}</h1>

            <ItemList products={products}/>
        </>
    );

}

const style ={
    bienvenida:{
        fontSize: 24,
    }
}


export default ItemListContainer