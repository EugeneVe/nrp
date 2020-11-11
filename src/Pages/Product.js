import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const Product = () => (
  <div className="MainContent">
    {/* <div className="product"> */}
    <div className="containerWarp contentInnerPages">
      <div className="anyPage">
        <div className="empty">
          <h2>My products</h2>
          <p className="faFeatherAlt">
            <FontAwesomeIcon icon={faFeatherAlt} />
          </p>
          <p>
            design, art, front end website, <br /> please follow the link below.
          </p>
          <div className="behProd">
            <a href="//www.behance.net/eugeneve" className="behProdBtn" target="blank">
              <FontAwesomeIcon icon={faBehanceSquare} />
              <p className="txtBehance">Please visit my page on Behance</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
