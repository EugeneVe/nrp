import React from 'react';
import './sass/style.scss';
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/product" exact component={Product} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;