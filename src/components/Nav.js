import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom";


class Nav extends Component {
    render() {
        return (
            <div>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <NavLink to="/home" className="navbar-brand js-scroll-trigger" href="/">React Router</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
      <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <NavLink to="/home">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/news">Tin tức</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/details">Tin chi tiết</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Liên hệ</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav;
