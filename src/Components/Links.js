import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <>
            <Link to="/" className="navUnderlineNone navList"><p>Home</p>
            </Link>
            <Link to="/about" className="navUnderlineNone navList"><p>About</p>
            </Link>
            <Link to="/product" className="navUnderlineNone navList"><p>Product</p>
            </Link>
            <Link to="/contact" className="navUnderlineNone navList"><p>Contact</p>
            </Link>
        </>
    )
}

export default Links;