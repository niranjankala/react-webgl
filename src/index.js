import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import Counters from "./components/counters";
import ThreeBoxScene from "./components/threeboxscene";
import ThreeOBJLoader from "./components/threeobjloader";
import BabylonOBJLoader from "./components/babylonobjloader";

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/threejsobjloader" component={ThreeOBJLoader} />
            <Route path="/babylonobjloader" component={BabylonOBJLoader} />
        </div>
    </Router>
);

//ReactDOM.render(<Counters />, document.getElementById("root"));
//ReactDOM.render(<ThreeBoxScene />, document.getElementById("root"));
//ReactDOM.render(<BabylonOBJLoader />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
