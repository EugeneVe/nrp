import React from 'react'
import './sass/style.scss'
import NavBar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Product from "./Components/Product"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Page404 from "./Components/Page404"
import Email from "./Components/Email"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Switch from 'react-router-transition-switch'
import Fader from 'react-fader'

var walls = [
  "url(//source.unsplash.com/1920x1080/?cars,bright)",
  // "url(//h988070k.beget.tech/randomwall.php)"
];

function getWall() {
  return walls[
    Math.floor(Math.random() * walls.length)
  ];
}

function changeWall() {
  document.documentElement.style.setProperty('--mainblockbg', getWall()); // Set the WALLPAPER from array
}

function App() {
  return (
    <Router>
      <NavBar />
      <Switch component={Fader}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/mailsent" component={Email} />
        <Route component={Page404} />
      </Switch>
      <button className="switchBg" type="button" onClick={changeWall}>.</button>       {/* accessKey="h"  */}
      <Footer />
    </Router>
  );
}

export default App;