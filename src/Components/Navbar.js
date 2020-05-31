import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar fixed="top" collapseOnSelect expand="sm" variant="dark" >
        <Link to="/">
          <div className="myBrand" ><span>EV</span></div>
        </Link>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/" className="navUnderlineNone navList"><p>Home</p>
              {/* <ReactBootStrap.Nav.Link href="#home"><p>Home</p></ReactBootStrap.Nav.Link> */}
            </Link>
            <Link to="/about" className="navUnderlineNone navList"><p>About</p>
              {/* <ReactBootStrap.Nav.Link href="#about"><p>About</p></ReactBootStrap.Nav.Link> */}
            </Link>
            <Link to="/product" className="navUnderlineNone navList"><p>Product</p>
              {/* <ReactBootStrap.Nav.Link href="#product"><p>Product</p></ReactBootStrap.Nav.Link> */}
            </Link>
            <Link to="/contact" className="navUnderlineNone navList"><p>Contact</p>
              {/* <ReactBootStrap.Nav.Link href="#contact"><p>Contact</p></ReactBootStrap.Nav.Link> */}
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default NavBar;