import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';
class SideBar extends Component {
    state = {}
    render() {
        return (
            <div className="side-nav-container">
                <h4>Demonstration Outline</h4>
                <ul className="side-nav">
                    <li><Link to={"/modeleditor/BLIS_SmallOfficeBldg"} className="nav-link" >1) Create new project</Link></li>
                    <li><Link to={"/modeleditor"} className="nav-link" >2) Create recidential building</Link></li>
                    <li><Link to={"/modeleditor"} className="nav-link" >3) Create parking building</Link></li>
                    <li><Link to={"/home"} className="nav-link" >4) Save project  & close</Link></li>
                    <li><Link to={"/home"} className="nav-link" >5) Open this saved project</Link></li>
                    <li><Link to={"/home"} className="nav-link" >6) Edit building (make L-shape)</Link></li>
                    <li><Link to={"/home"} className="nav-link" >7) Save project & close</Link></li>
                    <li><Link to={"/home"} className="nav-link" >8) Open the saved project</Link></li>
                    <li><Link to={"/home"} className="nav-link" >9) Import Revit smart Unit model</Link></li>
                    <li><Link to={"/home"} className="nav-link" >10) Export BIM from (7)</Link></li>
                    <li><Link to={"/home"} className="nav-link" >11) Import IFC model to Revit</Link></li>

                    {/* <li><a className="nav-link">Load Three.js model</a>
                    <ul className="underheading">
                        <li><Link to={"/threejsobjloader/BLIS_SmallOfficeBldg"} className="nav-link" >BLIS Small Office Bldg</Link></li>
                        <li><Link to={"/threejsobjloader/c_rvt8_Condo_Complex"} className="nav-link" >Condo Complex</Link></li>
                        <li><Link to={"/threejsobjloader/Institute-Var-2-IFC"} className="nav-link" >Institute Var 2 IFC</Link></li>
                        <li><Link to={"/threejsobjloader/konstrukcja-zmiany"} className="nav-link" >konstrukcja-zmiany</Link></li>
                        <li><Link to={"/threejsobjloader/MAG_ArkivenesHus"} className="nav-link" >MAG Arkivenes Hus</Link></li>
                        <li><Link to={"/threejsobjloader/Hospital_Parking_Garage"} className="nav-link" >Hospital Parking Garage</Link></li>
                        <li><Link to={"/threejsobjloader/STR_041117"} className="nav-link" >STR 041117</Link></li>
                        <li><Link to={"/threejsobjloader/RIV_ArkivenesHus"} className="nav-link" >RIV Arkivenes Hus</Link></li>
                    </ul>
                </li> */}


                    {/* <li><Link to={"/babylonjsobjloader"} className="nav-link"  >Load Babylon.js model</Link></li> */}
                </ul>
            </div>
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