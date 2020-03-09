import React, { Component } from "react";
import ReactDOM from 'react-dom';

//import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/header';
import Navbar from './components/layout/navbar';
import Users from './containers/Users/Users';
import Home from './containers/Homes';
class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div className="App">
                
            </div>
        )

    }

}
export default  App;