import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <h4>Demonstration Outline</h4>
                <ul className="side-nav">
                    <li><Link to={"/modeleditor/BLIS_SmallOfficeBldg"} className="nav-link" >Create recidential building</Link></li>
                    <li><Link to={"/home"} className="nav-link" >Create parking building</Link></li>
                    <li><Link to={"/home"} className="nav-link" >Save project  & close</Link></li>
                    <li><Link to={"/home"} className="nav-link" >Open project from list</Link></li>
                    <li><Link to={"/home"} className="nav-link" >Edit building</Link></li>
                    <li><Link to={"/home"} className="nav-link" >Save project & close</Link></li>
                    <li><Link to={"/home"} className="nav-link" >Open project from list</Link></li>

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