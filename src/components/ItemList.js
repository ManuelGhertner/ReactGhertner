import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div style={style.productos}>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
const style = {
  productos: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 1200,
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ItemList;
