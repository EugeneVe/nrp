import React from 'react';
import NavBar from 'Components/Navbar';
import Home from 'Pages/Home';
import About from 'Pages/About';
import Product from 'Pages/Products';
import Contact from 'Pages/Contacts';
import Footer from 'Components/Footer';
import Page404 from 'Pages/Page404';
import Email from 'Pages/Email';
import Blurswitch from 'Components/Blurswitch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-router-transition-switch';
import Fader from 'react-fader';
import CookieBanner from 'react-cookie-banner';
import { Lines } from 'react-preloaders';
import { ContextProvider } from 'AllContext';
import 'sass/style.scss';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Lines background="radial-gradient(circle, rgba(15,15,15,1) 0%, rgba(32,32,32,1) 100%)" />
        <NavBar />
        <Switch component={Fader}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/mailsent" component={Email} />
          <Route component={Page404} />
        </Switch>
        <Blurswitch />
        <Footer />
        <CookieBanner
          className="react-cookie-banner"
          message="Yes, my website use cookies!"
          onAccept={() => {
            alert('Thanks for understanding');
          }}
          cookie="user-has-accepted-cookies"
        />
      </Router>
    </ContextProvider>
  );
};
export default App;
