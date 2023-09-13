import React, { useContext } from "react";
import { products } from "./data";
import "../styles/home.css";
import { Mycontext } from "./Context";
import ContextProvider from "./ContextProvider";

export default function Home() {
  const { add, remove ,cart} = useContext(Mycontext);
  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-thumbnail"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="product-title">{product.title}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">${product.price}</div>
            <div className="discount-percentage">
              {product.discountPercentage}% off
            </div>

            <button
              className="product-button"
              onClick={() => {
                add(product);
              }}>
              {cart.find((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            
              
            </button>

            
          </div>
        ))}
      </div>
    </>
  );
}
