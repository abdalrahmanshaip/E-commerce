import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const param = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    console.log(product);
  }, []);
  console.log(param);
  return (
    <Product
      product={product}
      showButton={false}
      className=" flex align-middle justify-center"
    />
  );
}

export default ProductDetails;
