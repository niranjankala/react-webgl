import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <ul className="side-nav">
                <li><Link to={`/home`} className="nav-link" >Home</Link></li>
                <li><a className="nav-link">Load Three.js model</a>
                    <ul className="underheading">
                        <li><Link to={`/threejsobjloader/BLIS_SmallOfficeBldg`} className="nav-link" >Building Model 1</Link></li>
                        <li><Link to={`/threejsobjloader/c_rvt8_Condo_Complex`} className="nav-link" >Building Model 2</Link></li>
                        <li><Link to={`/threejsobjloader/Institute-Var-2-IFC`} className="nav-link" >Building Model 3</Link></li>
                        <li><Link to={`/threejsobjloader/konstrukcja-zmiany`} className="nav-link" >Building Model 4</Link></li>
                        <li><Link to={`/threejsobjloader/STR_041117`} className="nav-link" >Building Model 5</Link></li>
                        <li><Link to={`/threejsobjloader/Pegasus-1`} className="nav-link" >Pegasus Model 1</Link></li>
                        <li><Link to={`/threejsobjloader/Pegasus-2`} className="nav-link" >Pegasus Model 2</Link></li>
                        <li><Link to={`/threejsobjloader/Pegasus-3`} className="nav-link" >Pegasus Model 3</Link></li>
                    </ul>
                </li>
                {/* <li><Link to={"/babylonjsobjloader"} className="nav-link"  >Load Babylon.js model</Link></li> */}
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