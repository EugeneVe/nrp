import React from "react";
import { Link } from "react-router-dom";
import Wallnext from "Components/Wallnext";
import Wallnextxxx from "Components/Wallnextxxx";
import BackgroundCustom from "Components/BackgroundCustom/BackgroundCustom";
import { Burger } from "Components/Navbar";

const LinkForHeader = ({ title, link }) => {
  return (
    <Link to={link} className="navUnderlineNone navList" onClick={Burger}>
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
    <BackgroundCustom />
  </>
);

export default Links;
