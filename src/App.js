import React from 'react';
import './sass/style.scss';
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div><Home /></div>
      <Router>
        <>
          <NavBar />
        </>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/product" component={Product}>
            <Product />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
        <>
          <Footer />
        </>
      </Router>

    </div>
  );
}

export default App;