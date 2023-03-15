import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();

  console.log(name);
  useEffect(() => {
    if (name) {
      const productsCollection = collection(db, "products");
      const q = query(productsCollection, where("category", "==", name));
      getDocs(q)
        .then((data) => {
          const list = data.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });

          setProducts(list);
          console.log(list);
        })
        .catch(() => {
          setError(true);
        });
    } else {
      const productsCollection = collection(db, "products");
      getDocs(productsCollection)
        .then((data) => {
          const list = data.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });

          setProducts(list);
          console.log(list);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [name]);

  return (
    <>
      <h1 style={style.bienvenida}>{greeting}</h1>

      <>
        {products.length ? (
          <ItemList products={products} />
        ) : (
          <h1>Cargando...</h1>
        )}
      </>
    </>
  );
};

const style = {
  bienvenida: {
    fontSize: 24,
  },
};

export default ItemListContainer;
