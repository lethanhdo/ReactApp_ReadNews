import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Home from '../components/Home';
import News from '../components/News';
import Details from '../components/Details';
import Contact from '../components/Contact';


class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/details/:slug.:id.html" component={Details}/>
                <Route exact path="/contact" component={Contact}/>
                </div>
        );
    }
}

export default DieuHuongURL;
