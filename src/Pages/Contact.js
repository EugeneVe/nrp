import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faPhone,
  faEnvelope,
  faComment,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const loadImage = (event) => {
  let wallUrl = "--mainblockbg";
  document.documentElement.style.setProperty(
    wallUrl,
    "url(" + URL.createObjectURL(event.target.files[0]) + ")"
  );
  let pic = document.getElementById("inpPreview");
  pic.src = URL.createObjectURL(event.target.files[0]);
  pic.onload = () => {
    URL.revokeObjectURL(pic.src); // clearing memory
  };
};

const Contact = () => (
  <div className="MainContent">
    <div className="containerWarp contentInnerPages">
      <div className="anyPage">
        <h2>Contacts</h2>
        <p className="faFeatherAlt">
          <FontAwesomeIcon icon={faFeatherAlt} />
        </p>
        <div className="social">
          <ul>
            <a
              href="https://www.facebook.com/eugeneveprytskyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <p className="faOrigin fb">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </p>
                <p className="txtOrigin">Facebook</p>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/eugeneve/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <p className="faOrigin ld">
                  <FontAwesomeIcon icon={faLinkedin} />
                </p>
                <p className="txtOrigin">Linkedin</p>
              </li>
            </a>
            <a
              href="https://www.instagram.com/eugene.vep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <p className="faOrigin in">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </p>
                <p className="txtOrigin">Instagram</p>
              </li>
            </a>
            {/* <a
              href="//twitter.com/EugeneVep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <p className="faOrigin tw">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </p>
                <p className="txtOrigin">Twitter</p>
              </li>
            </a> */}
          </ul>
        </div>
        <p className="feedback">Message to me:</p>
        <div className="mail">
          <form
            id="form"
            className="formWrap"
            action="https://advokat-veprytskyi.com/H340v93kd8sk2lueM4f8v62olssp.php"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="icon">
              <FontAwesomeIcon icon={faUser} className="userName" />
              <input
                id="searchTxt"
                className="formInner"
                type="text"
                placeholder="Name"
                name="user_name"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} className="userPhone" />
              <input
                id="searchTxt"
                className="formInner"
                type="tel"
                placeholder="Phone number"
                name="user_phone"
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} className="userMail" />
              <input
                id="searchTxt"
                className="formInner"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faComment} className="userMessage" />
              <textarea
                id="searchTxt"
                className="formInner message"
                type="text"
                placeholder="Text"
                name="user_text"
                required
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faPaperclip} className="userAttach" />
              <input
                id="searchTxt"
                className="formInner"
                name="upload"
                type="file"
                accept="image/*"
                title="Please choose image"
                onChange={loadImage}
              />
            </div>
            <input type="hidden" name="_next" />
            <input type="text" name="_gotcha" className="spam" />
            <button className="navUnderlineNone sendButton">SEND</button>
            <div className="inpPreviewContainer">
              <span className="imgError">Attached image</span>
              <img id="inpPreview" alt=" " />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
