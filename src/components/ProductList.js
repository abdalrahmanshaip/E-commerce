import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProduct = () => {
    fetch(`${api_url}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    console.log(product);
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    console.log(categories);
  };
  const getProductCategories = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  return (
    <div className=" container ml-8">
      <h3 className="flex justify-center align-middle text-2xl mb-20 mt-10">
        Our Product
      </h3>
      <div className="flex">
        <button
          className=" mr-6 bg-violet-600 text-white p-2 rounded-md"
          onClick={() => {
            getProduct();
          }}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              className="mr-6 bg-violet-600 text-white p-2 rounded-md"
              key={cat}
              onClick={() => {
                getProductCategories(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 align-middle justify-center">
        {product.map((pro) => {
          return <Product product={pro} key={pro.id} showButton={true} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
