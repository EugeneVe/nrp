import React from 'react'
import './sass/style.scss'
import NavBar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Product from "./Components/Product"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Switch from 'react-router-transition-switch'
import Fader from 'react-fader'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch component={Fader}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;