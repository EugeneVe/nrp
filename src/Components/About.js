import React from 'react'
import "../sass/about.scss";

const About = () => {
    return (
        <div className="MainContent">
            <div className="containerWarp contentInner contentInnerPages">
                <div className="about">
                    <h2>About Me</h2>
                    <h3>Hello, my name is Eugene Veprytskyi</h3>
                    <p>I`m web designer with several years of experience is looking for further training, challenges and experience while working towards a career in Web Design and UI-UX Design in an IT Company.</p>
                    <h3>Skills</h3>
                    <div className="flexColumn">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS ( CSS3, SASS, LESS )</li>
                            <li>JavaScript (ES6):
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
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe XD</li>
                            <li>Figma</li>
                            <li>Experience with Git</li>
                        </ul>
                    </div>
                    <h3>Experience</h3>
                    <ul >
                        <p>NOVEMBER 2015 – PRESENT</p>
                        <li>Web Designer, Front End Developer / Freelance</li>
                        <li>Experience in creating wireframes, mockups, prototypes;</li>
                        <li>Creating full-stack projects based on Wordpress, Joomla;</li>
                        <li>Markup on HTML5, CSS3, SASS, LESS, JavaScript (ES6), Jquery, bootstrap (UI Bootstrap - AngularUI) AngularJS, <b>React</b>;</li>
                        <li>Custom icons and UI elements designs.</li>
                    </ul>
                    <h3>Education</h3>
                    <ul >
                        <p>2005 - 2011</p>
                        <li>Specialist / Kharkiv National University "Politechnical Institute"</li>
                        <li>Computer Technologies and Network</li>
                        <p>1999 - 2004</p>
                        <li>Specialist / Kharkiv National University of Internal Affairs</li>
                        <li>Jurisprudence</li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default About;