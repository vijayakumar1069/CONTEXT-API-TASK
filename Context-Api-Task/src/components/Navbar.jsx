import React, { useContext } from "react";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import "../styles/Navbar.css";
import { Mycontext } from "./Context";
import Cartpage from "./Cartpage";

export default function Navbar() {
  const{cart}=useContext(Mycontext)
  return (
    <>
      <Router>
        <div className="navbar-head">
          <div className="left-navbar">
            <Link to="/" >
              <a href="">
                <h1>Home </h1>
              </a>
            </Link>
          </div>
          <div className="right-navbar">
            <Link to="Cart" >
              <a href="">
                <i className="fa-solid fa-cart-shopping">
                  <span>{cart.length}</span>
                </i>
              </a>
            </Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/" Component={Home}>
            Home
          </Route>
          <Route path="Cart" Component={Cartpage}>
            Cart
          </Route>
        </Routes>
      </Router>
    </>
  );
}
