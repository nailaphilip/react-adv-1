import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://fakestoreapi.com/products/";

// distructuring the data by puting data and calling it products
const { data: products } = await axios.get(api);

const ProductsList = () => {
  console.log(products);

  return <div>Products will be here</div>;
};

export default ProductsList;
