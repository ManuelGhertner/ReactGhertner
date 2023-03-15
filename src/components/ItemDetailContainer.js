import { lightGreen } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomContext } from "../context/CustomContext";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/firebase";
import { getDoc, doc, collection, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((data) => {
      console.log({
        cantidad: 0,
        id: data.id,
        ...data.data(),
      });

      const item = { ...data.data(), id: data.id, cantidad: data.cantidad };

      setDetails(item);
    }) .catch((ERROR) => {
         setError(true);
         console.log("ERROR");
      });

    console.log(detail);
  }, []);

  return <ItemDetail detail={detail} />;
};

export default ItemDetailContainer;
