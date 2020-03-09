import React, { Component } from "react";
import { Router, Route,Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        <a href="#hero"><img src="img/logo.png" alt="" title="" /></a>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active">
              <Link to="/">Home</Link></li>
          <li><Link to= "/users">Users</Link></li>
        </ul>
      </nav>
    </div>
  </header>
        )

    }

}
export default  Header;