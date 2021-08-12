import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../../home/home';
import Nav from './nav/nav';
import Bag from './bag/bag';
import './app.scss';
import Women from './nav/women/womenSection';
import Men from './nav/men/menSection';

const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <Link className="name" to="/">
          ОДЕЖДА СЕБЕ И КОМУ-ТО
        </Link>
        <Nav />
      </div>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Bag} path="/Bag" />
      <Route component={Women} path="/Women" />
      <Route component={Men} path="/Men" />
    </Switch>
  </Router>
);

export default App;
