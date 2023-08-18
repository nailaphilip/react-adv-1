import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const api = "https://fakestoreapi.com/products/";

// distructuring the data by puting data and calling it products
const { data: products } = await axios.get(api);

const ProductsList = () => {
  console.log(products);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "1rem" }}>
      {products.map((product) => (
        <Product key={product?.id} {...product} />
        // ? means ignore if the property doesn't exist
      ))}
    </div>
  );
};

export default ProductsList;
