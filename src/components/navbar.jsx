import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link to={"/home"} className="navbar-brand">
                    <img src={logo} className="d-inline-block align-top App-logo" alt="logo" />
                    react-webgl
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/threejsobjloader"} className="nav-link">Load Threejs obj loader</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/babylonjsobjloader"} className="nav-link">Load Babylon obj loader</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;