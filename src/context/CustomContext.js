import React, { createContext, useState, useEffect } from "react";


export const CustomContext = createContext ();


export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [productsCant, setProductsCant] = useState(0);

    useEffect(() =>{
        setProductsCant(cart.reduce((previous, current) => previous + current.cantidad,0));
    },[cart]);

    console.log(cart);
    const addProduct = (product, cantidad) =>{
        const isInCart = cart.find(
            (productInCart) => productInCart.id === product.id
        );
        if(isInCart){

            setCart(
                cart.map((productInCart) =>{
                    if(productInCart.id === product.id){
                        
                        return {...isInCart,cantidad: isInCart.cantidad + cantidad}
                    }else return productInCart;
                })
            )
        } else{
            
            setCart([...cart,{...product, cantidad}])
          
        }
        
    }
    const removeProduct = (product) =>{
        const isInCart = cart.find(
            (productInCart) => productInCart.id === product.id
            
        );

        if(isInCart.cantidad === 1){
            setCart(
                cart.filter((productInCart)=> productInCart.id !== product.id)
            );
        } else {
            setCart(
                cart.map((productInCart)=>{
                if (productInCart.id === product.id){
                    return{...isInCart, cantidad: isInCart.cantidad -1};
                } else return productInCart;
            }))
        }
    }


   

    return(
   <CustomContext.Provider value ={{cart, addProduct,removeProduct, productsCant}}>{children}</CustomContext.Provider>
    )
}


// export const CustomProvider = ({children}) =>{
//     const [cart, setCart] = useState([]);
//     const [cant, setCant] = useState(0);
//     // useEffect(()=>{
//     //     let cantInicial = 0;
//     //     cart.forEach((product) =>{
//     //         cantInicial += product.cant;
//     //     });
//     //     setCant(cantInicial);
//     // },[cart]);
//     const addProduct = (product,cantidad) =>{
//         if (isInCart(product.id)){
//             console.log(isInCart());
//             // let cantidadActualizada = cantidad
//             // setCart([...cart,{...product,cantidadActualizada}])
//             // setCant(cant + cantidadActualizada)
//             // console.log(cant)
//             // console.log(cantidadActualizada);
//     //    setCant(prevCant => prevCant +1)
//     //         console.log(cant);
//         //    console.log(cantidad);
//         //   console.log(cantidadActualizada);
//         //     setCart([...cart,{...product,cantidadActualizada}])
//         } 
//         else{
//             setCart([...cart,{...product,cantidad}])
//             setCant(cant + cantidad)
//             console.log(product);
//         } 
//         // let cantidadActualizada = cantidad + cant;
//         console.log(cantidad);
//         console.log(cant);
//         console.log(product);
//     }
    

    
//     const removeProduct = (id) =>{
//        setCart(cart.filter((product)=>{return product.id !== id}))
//     }

//     const isInCart = (id)=>{
//             setCart(cart.some((product) => (product.id) === (id)))
//     }



    // const clear = () =>{
    //     setCart([]);
       
    // }

//     return(
//    <CustomContext.Provider value ={{cart, addProduct, isInCart, cant, removeProduct}}>{children}</CustomContext.Provider>
//     )
// }