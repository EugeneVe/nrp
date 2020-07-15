import React from "react"
import { Link } from "react-router-dom"
import Wallnext from "./Wallnext"

const Links = () => {
  return (
    <>
      <Link to="/" className="navUnderlineNone navList">
        <p>Home</p>
      </Link>
      <Link to="/about" className="navUnderlineNone navList">
        <p>About</p>
      </Link>
      <Link to="/product" className="navUnderlineNone navList">
        <p>Product</p>
      </Link>
      <Link to="/contact" className="navUnderlineNone navList">
        <p>Contact</p>
      </Link>
      <Link className="navUnderlineNone navList">
        <Wallnext />
      </Link>
    </>
  )
}

export default Links
