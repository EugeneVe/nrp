import React from 'react'
import '../sass/bottomFooter.scss'
import Links from './Links'
import * as ReactBootStrap from "react-bootstrap"
import { Link } from "react-router-dom"
import Moment from 'react-moment'

const Footer = () => {
    return (
        <div className="footerwrapper">
            <ReactBootStrap.Navbar fixed="top" expand="sm" variant="dark" className="bottomNavBar">
                <Link to="/">
                    <div className="myBrand" ><span>EV</span></div>
                </Link>
                <ReactBootStrap.Nav className="navbar-navCustom">
                    <Links />
                </ReactBootStrap.Nav>
                <span>© EugeneV 2020 - <Moment format="YYYY" /></span>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default Footer;