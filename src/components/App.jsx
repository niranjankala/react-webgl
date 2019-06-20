import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ThreeOBJLoader from './threeobjloader';
import BabylonOBJLoader from './babylonobjloader';
import Home from './home';
import SideBar from './sidebar';
import './App.css';
import NavBar from './navbar';

class App extends React.Component {
    render() {
        return (<Router>
            {/* <NavBar title="3D Demonstrator" pageTitle="" /> */}
            <div className="container-fluid">
                <NavBar title="3D Demonstrator" pageTitle="" />
                <div className="row">
                    <div className="col-md-2 col-lg-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10 col-lg-10">
                        <Switch>
                            <Route path={"/"} component={Home} exact></Route>
                            <Route path={"/threejsobjloader"} component={ThreeOBJLoader} />
                            <Route path={"/babylonjsobjloader"} component={BabylonOBJLoader} />
                            <Route path={"/home"} component={Home} />
                        </Switch>
                    </div>
                    <div></div>
                </div>
            </div>
        </Router>
        );
    }
}

export default App;
