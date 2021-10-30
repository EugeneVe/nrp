import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const Email = () => (
  <div className="MainContent">
    <div className="home">
      <div className="containerWarp contentInnerPages ">
        <div className="anyPage">
          <div className="empty">
            <h2>Email Sent!</h2>
            <p className="faFeatherAlt">
              <FontAwesomeIcon icon={faFeatherAlt} />
            </p>
            <p>Go back to main page</p>
            <Link to="/" className="navUnderlineNone sendButton">
              <p>Home</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Email;
