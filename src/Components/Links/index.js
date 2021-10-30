import React from "react";
import { Link } from "react-router-dom";
import Wallnext from "Components/Wallnext";
import Wallnextxxx from "Components/Wallnextxxx";
import { Burger } from "Components/Navbar";

const LinkForHeader = ({ title, link }) => {
  return (
    <Link to={link} className="navUnderlineNone navList navLis_animation" onClick={Burger}>
      <span>{title}</span>
    </Link>
  );
};

const Links = () => (
  <>
    <Wallnextxxx />
    <LinkForHeader link="/" title="Home" />
    <LinkForHeader link="/about" title="About" />
    <LinkForHeader link="/product" title="Product" />
    <LinkForHeader link="/contact" title="Contact" />
    <LinkForHeader link="#" title={<Wallnext />} />
  </>
);

export default Links;
