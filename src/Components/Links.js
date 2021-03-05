import React from "react";
import { Link } from "react-router-dom";
import Wallnext from "./Wallnext";
import Wallnextxxx from "../Components/Wallnextxxx";
import { Burger } from "../Components/Navbar";

const Links = () => (
  <>
    <Wallnextxxx />
    <Link to="/" className="navUnderlineNone navList navLis_animation" onClick={Burger}>
      <p>Home</p>
    </Link>
    <Link to="/about" className="navUnderlineNone navList navLis_animation" onClick={Burger}>
      <p>About</p>
    </Link>
    <Link to="/product" className="navUnderlineNone navList navLis_animation" onClick={Burger}>
      <p>Product</p>
    </Link>
    <Link to="/contact" className="navUnderlineNone navList navLis_animation" onClick={Burger}>
      <p>Contact</p>
    </Link>
    <Link to="#" className="navUnderlineNone navList navLis_animation" onClick={Burger}>
      <Wallnext />
    </Link>
  </>
);

export default Links;
