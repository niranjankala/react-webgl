import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ThreeOBJLoader from './threeobjloader';
import BabylonOBJLoader from './babylonobjloader';
import Home from './home';
import SideBar from './sidebar';
import SideBarBabylon from './sidebar_babylon';
import './App.css';
import NavBar from './navbar';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            pageTitle: ''
        }
    }

    getPageTitle = pageTitle => {
        this.setState({ pageTitle });
    }

    render() {
        return (<Router basename={process.env.PUBLIC_URL}>
            <div className="container-fluid">
                <NavBar title="3D Demonstrator" pageTitle={this.state.pageTitle} />
                <div className="row">
                    <div className="col-md-2 col-lg-2">
                        <SideBarBabylon />
                    </div>
                    <div className="col-md-10 col-lg-10">
                        <Switch>
                            <Route path={"/"} render={(props) => <Home {...props} getPageTitle={this.getPageTitle} />} exact></Route>
                            <Route path={"/threejsobjloader/:model"} render={(props) => <ThreeOBJLoader {...props} getPageTitle={this.getPageTitle} />} />
                            <Route path={"/babylonjsobjloader/:model"} render={(props) => <BabylonOBJLoader {...props} getPageTitle={this.getPageTitle} />} />
                            <Route path={"/home"} render={(props) => <Home {...props} getPageTitle={this.getPageTitle} />} />
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
