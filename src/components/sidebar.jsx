import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/threejsobjloader"} >Load Threejs obj loader</Link></li>
                            <li><Link to={"/babylonjsobjloader"} >Load Babylon obj loader</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;