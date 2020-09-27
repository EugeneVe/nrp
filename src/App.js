import React from "react";
import "./sass/style.scss";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Page404 from "./Pages/Page404";
import Email from "./Pages/Email";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-router-transition-switch";
import Fader from "react-fader";

const App = () => {
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
      <Footer />
    </Router>
  );
};
export default App;
