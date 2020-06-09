import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <>
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
        </>
    )
}

export default Links;