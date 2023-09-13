import React, { useState } from "react";
import { Mycontext } from "./Context";
import { products } from "./data";
function getdetails() {
  let obj = {};
  for (let i = 1; i <= products.length; i++) {
    obj[i] = 0;
  }
  return obj;
}

export default function ContextProvider({ children }) {
  const [objectdetails, setObjectdetails] = useState(getdetails());

  const [cart, setCart] = useState([]);
  const add = (item) => {
    // Check if the item is already in the cart
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCart([...cart, { ...item, addedToCart: true }]);
      setObjectdetails({
        ...objectdetails,
        [item.id]: objectdetails[item.id] + 1,
      });
    } else {
      // Remove the item from the cart if it's already added
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);

      setCart(updatedCart);
      setObjectdetails({
        ...objectdetails,
        [item.id]: objectdetails[item.id] - 1,
      });
    }
  };
  const [itemQuantities, setItemQuantities] = useState({});

  // Function to handle quantity changes
  const handleQuantityChange = (itemId, quantity) => {
    setItemQuantities({
      ...itemQuantities,
      [itemId]: quantity,
    });
  };
  const remove = (item) => {
    setCart(cart.filter((items, index) => items.id != item.id));
  };

  console.log(objectdetails);

  return (
    <Mycontext.Provider value={{ add, cart, remove,handleQuantityChange,itemQuantities }}>
      {children}
    </Mycontext.Provider>
  );
}
