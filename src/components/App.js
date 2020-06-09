import './../css/App.css';

import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav></Nav>
          <DieuHuongURL></DieuHuongURL>
        <Footer></Footer>
      </div>
      </Router>
    );
  }
}

export default App;


