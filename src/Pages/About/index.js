import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Download } from 'assests/images/download.svg';
import Tooltip from '@mui/material/Tooltip';
import courses_done from 'assests/images/UC-33756c4b-b5b1-49ce-b0e6-4902d5ad32ae.jpg';
import './index.scss';

const About = () => (
  <div className="MainContent">
    <div className="containerWarp contentInnerPages">
      <div className="anyPage">
        <h2>About me</h2>
        <p className="faFeatherAlt">
          <FontAwesomeIcon icon={faFeatherAlt} />
        </p>
        <h3>Hello, my name is Eugene Veprytskyi</h3>
        <p className="about-description">
          I am purposeful, reliable, creative and fast learning web developer with experience at few project is looking
          for further training and experience while working towards a career in Frontend Web Development, 100% team
          player, friendly, passionate, supportive.
          <Tooltip title={<span className="title-cv">Download my CV</span>} arrow>
            <a
              className="cv-link"
              href="https://mega.nz/file/FMY3ARJY#QcvxrEWqHgk-lVZ-vUpbKuQVkw0s5IjMzJj6B253BRg"
              target="blank"
            >
              <Download />
            </a>
          </Tooltip>
        </p>
        <h3>Languages</h3>
        <div className="flexColumn">
          <ul>
            <li>English: Pre-Intermediate</li>
            <li>Ukrainian: Native</li>
            <li>Russian: Native</li>
          </ul>
        </div>
        <h3>Skills</h3>
        <div className="flexColumn">
          <ul>
            <li>UI/UX Design</li>
            <li>HTML5 - Deep Knowledge</li>
            <li>CSS ( CSS3, SASS, LESS ) - Deep Knowledge</li>
            <li>
              JavaScript (ES6) - Base:
              <ul>
                <li>React JS</li>
                <li>Material UI</li>
                <li>Jquery</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Figma</li>
            <li>Adobe Illustrator - Deep Knowledge</li>
            <li>Adobe Photoshop - Deep Knowledge</li>
            <li>Adobe XD</li>
            <li>Experience with Git</li>
          </ul>
        </div>
        <div className="courses_done">
          <img className="courses_done__image" src={courses_done} alt="My ended course" />
          <p>
            This certificate above verifies that Eugene Veprytskyi successfully completed the course The Complete
            Front-End Web Development Course! on 02/06/2021 as taught by Joseph Delgadillo, Nick Germaine on Udemy. The
            certificate indicates the entire course was completed as validated by the student. The course duration
            represents the total video hours of the course at time of most recent completion.
          </p>
        </div>
        <h3>Projects</h3>
        <ul>
          <li>
            <b>Time period:</b> September 2021 – Febrary 2022
          </li>
          <li>
            <b>Position:</b> UI/UX design, Front-end developer
          </li>
          <li>
            <b>Project:</b> <a href="https://bulbee.org">https://bulbee.org</a>
          </li>
          <li>
            <b>Technologies:</b> Figma, React JS, MUI, SASS.
          </li>
        </ul>
        <ul>
          <li>
            <b>Time period:</b> December 2020 – March 2021
          </li>
          <li>
            <b> Position:</b>Front-End developer (React) UI/UX design{' '}
          </li>
          <li>
            <b> Project: </b> <a href="http://eugenev.space">http://eugenev.space</a> CV Website (own home page).
          </li>
          <li>
            {' '}
            <b>Technologies:</b> Figma, Adobe Photoshop, HTML5, CSS3, SASS, JavaScript, React, hosting setup, deploy.
          </li>
        </ul>

        <ul>
          <li>
            <b>Time period:</b> March 2020 – May 2020
          </li>
          <li>
            <b>Position:</b> Full Stack WordPress developer
          </li>
          <li>
            <b>Project:</b> <a href="http://arhzemproekt.kh.ua">http://arhzemproekt.kh.ua</a> Business Card Website,
            with online service ordering (custom PHP function).
          </li>
          <li>
            <b>Technologies:</b> WP, Figma, Adobe Photoshop, HTML, SASS, JavaScript, PHP, hosting setup, deploy.
          </li>
        </ul>
        <ul>
          <li>
            <b>Time period:</b> September 2019 – October 2019{' '}
          </li>
          <li>
            <b>Position:</b> Full Stack WordPress developer{' '}
          </li>
          <li>
            <b>Project:</b> <a href="https://advokat-veprytskyi.com">https://advokat-veprytskyi.com</a> Business Card
            Website
          </li>
          <li>
            <b>Technologies:</b> WP, Figma, Adobe Photoshop, HTML, SASS, JavaScript, PHP, hosting setup, deploy.
          </li>
        </ul>
        <ul>
          <li>
            <b>Time period:</b> September 2017 – November 2017{' '}
          </li>
          <li>
            <b>Position:</b> UI/UX design{' '}
          </li>
          <li>
            <b>Project:</b> <a href="https://metalist1925.club">https://metalist1925.club</a> e-ticket website of local
            football club
          </li>
          <li>
            <b>Technologies:</b> Figma, AI, Adobe Photoshop.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
