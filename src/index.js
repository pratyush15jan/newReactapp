import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/header';
import Navbar from './components/layout/navbar';
import Users from './containers/Users/Users';
import Addusers from './containers/Users/Adduser';
import Editusers from './containers/Users/Edituser';

import Home from './containers/Homes';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
      <Header />
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/addusers" component={Addusers} />
    </Switch>

  </Router>
  , document.getElementById('root'));
//registerServiceWorker();
