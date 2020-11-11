import React from "react";
import Blurswitch from "./Blurswitch";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const Page404 = () => (
  <div className="MainContent">
    <div className="home">
      <div className="containerWarp textPcentered">
        <h2>404 OOPS!</h2>
        <p className="faFeatherAlt">
          <FontAwesomeIcon icon={faFeatherAlt} />
        </p>
        <p>
          Not Found <br /> Page you requested not found
        </p>
        <Link to="/" className="navUnderlineNone navList sendButton">
          <p>Home</p>
        </Link>
        <Blurswitch />
      </div>
    </div>
  </div>
);

export default Page404;
