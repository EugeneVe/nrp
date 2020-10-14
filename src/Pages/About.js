import React from "react";
import Blurswitch from "../Components/Blurswitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="MainContent">
      <div className="containerWarp contentInner contentInnerPages">
        <div className="anyPage">
          <h2>About me</h2>
          <p className="faFeatherAlt">
            <FontAwesomeIcon icon={faFeatherAlt} />
          </p>
          <h3>Hello, my name is Eugene Veprytskyi</h3>
          <p>
            I`m web designer with several years of experience is looking for further training, challenges and experience while working towards a career in Web Design and UI-UX
            Design in an IT Company.
          </p>
          <h3>Skills</h3>
          <div className="flexColumn">
            <ul>
              <li>HTML5 - Deep Knowledge</li>
              <li>BEM — Block Element Modifier</li>
              <li>CSS ( CSS3, SASS, LESS ) - Deep Knowledge</li>
              <li>
                JavaScript (ES6) - Base:
                <ul>
                  <li>React</li>
                  <li>AngularJS</li>
                  <li>AngularUI</li>
                  <li>Jquery</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Web Design</li>
              <li>UI/UX Design</li>
              <li>Adobe Photoshop - Deep Knowledge</li>
              <li>Adobe Illustrator - Deep Knowledge</li>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Experience with Git</li>
            </ul>
          </div>
          <h3>Experience</h3>
          <ul>
            <p>NOVEMBER 2015 – PRESENT</p>
            <li>Web Designer, Front End Developer / Freelance</li>
            <li>Experience in creating wireframes, mockups, prototypes;</li>
            <li>Creating full-stack projects based on Wordpress, Joomla;</li>
            <li>
              Markup on HTML5, CSS3, SASS, LESS, JavaScript (ES6), Jquery, bootstrap (UI Bootstrap - AngularUI) AngularJS, <b>React</b>;
            </li>
            <li>Custom icons and UI elements designs.</li>
          </ul>
          <h3>Education</h3>
          <ul>
            <p>2005 - 2011</p>
            <li>Specialist / Kharkiv National University "Politechnical Institute"</li>
            <li>Computer Technologies and Network</li>
            <p>1999 - 2004</p>
            <li>Specialist / Kharkiv National University of Internal Affairs</li>
            <li>Jurisprudence</li>
          </ul>
        </div>
        <Blurswitch />
      </div>
    </div>
  );
};

export default About;
