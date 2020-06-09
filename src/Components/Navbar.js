import React from 'react'
import '../sass/topNavBar.scss'
import * as ReactBootStrap from "react-bootstrap"
import { Link } from "react-router-dom"
import Links from './Links'

const NavBar = () => {
  return (
    <ReactBootStrap.Navbar fixed="top" collapseOnSelect expand="sm" variant="dark" className="topNavBar">
      <Link to="/">
        <div className="myBrand" ><span>EV</span></div>
      </Link>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <Links />
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  )
}

export default NavBar;