import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBarBabylon extends Component {

    render() {
        return (
            <ul className="side-nav">
                <li><Link to={`/home`} className="nav-link" >Home</Link></li>
                <li><a className="nav-link">Load Babylon.js model</a>
                    <ul className="underheading">
                        <li><Link to={`/babylonjsobjloader/BLIS_SmallOfficeBldg`} className="nav-link" >Building Model 1</Link></li>
                        <li><Link to={`/babylonjsobjloader/c_rvt8_Condo_Complex`} className="nav-link" >Building Model 2</Link></li>
                        <li><Link to={`/babylonjsobjloader/Institute-Var-2-IFC`} className="nav-link" >Building Model 3</Link></li>
                        <li><Link to={`/babylonjsobjloader/konstrukcja-zmiany`} className="nav-link" >Building Model 4</Link></li>
                        <li><Link to={`/babylonjsobjloader/STR_041117`} className="nav-link" >Building Model 5</Link></li>
                        <li><Link to={`/babylonjsobjloader/Pegasus-1`} className="nav-link" >Pegasus Model 1</Link></li>
                        <li><Link to={`/babylonjsobjloader/Pegasus-2`} className="nav-link" >Pegasus Model 2</Link></li>
                        <li><Link to={`/babylonjsobjloader/Pegasus-3`} className="nav-link" >Pegasus Model 3</Link></li>
                    </ul>
                </li>
            </ul>
        );
    }

}

export default SideBarBabylon;