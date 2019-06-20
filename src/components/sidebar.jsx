import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <ul className="side-nav">
                <li><Link to={"/home"} className="nav-link" >Home</Link></li>
                <li><Link to={"/threejsobjloader"} className="nav-link" >Load Three.js model</Link></li>
                <li><Link to={"/babylonjsobjloader"} className="nav-link"  >Load Babylon.js model</Link></li>
            </ul>
            // <div className="nav flex-column nav-pills" aria-orientation="vertical">
            //     <Link to={"/home"} className="nav-link" data-toggle="pill" >Home</Link>
            //     <Link to={"/threejsobjloader"} className="nav-link" data-toggle="pill">Load Three.js model</Link>
            //     <Link to={"/babylonjsobjloader"} className="nav-link" data-toggle="pill" >Load Babylon.js model</Link>
            // </div>
            // <nav className="navbar navbar-default">
            //     <div className="container">
            //         <div className="navbar-header">
            //             <ul className="nav navbar-nav">
            //                 <li className=""><Link to={"/home"}>Home</Link></li>
            //                 <li><Link to={"/threejsobjloader"} >Load Threejs obj loader</Link></li>
            //                 <li><Link to={"/babylonjsobjloader"} >Load Babylon obj loader</Link></li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}

export default SideBar;