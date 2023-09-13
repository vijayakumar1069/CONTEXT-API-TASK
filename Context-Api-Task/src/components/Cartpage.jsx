// Cart.js

import React, { useContext, useState } from "react";
import { Mycontext } from "./Context";
import "../styles/cart.css"; // Import your CSS file for styling

export default function Cart() {
  const { cart, handleQuantityChange, itemQuantities, remove } =
    useContext(Mycontext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={itemQuantities[item.id] || 1}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </div>
                <p>
                  Total Price: ${item.price * (itemQuantities[item.id] || 1)}
                </p>
                <button
                  className="remove-button"
                  onClick={() => {
                    remove(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
