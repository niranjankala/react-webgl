import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

  render() {
    
    return (
      <div className="row bg-dark header-nav">
        <div className="col-md-2 col-lg-2 header-brand">
          <Link to={"/home"}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              className="d-inline-block align-top App-logo"
              width="100%"
              height="100%"
              alt="logo"
            />
          </Link>
        </div>
        <div className="col-md-6 col-lg-6">
          <span className="navbar-brand-text"> {this.props.title}</span>
        </div>
        <div className="col-md-4 col-lg-4 d-flex justify-content-end">
          <table id="heder-table">
            <tbody>
              <tr>
                <td>Javascript Framework</td>
                <td>= React</td>
              </tr>
              <tr>
                <td>3D Framework</td>
                <td>= {this.props.pageTitle}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NavBar;
