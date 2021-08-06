import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Home from '../../home/home';
import Nav from './nav/nav';
import Bag from './bag/bag';

const App = () => (<Router>
            <div className="app">
                <Link to="/">
                    <h1>ОДЕЖДА МНЕ И КОМУ-ТО</h1>
                </Link>
                <Link to="/Bag">
                    <h1>Корзина</h1>
                </Link>
                <Nav />
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={Bag} path="/Bag"/>
            </Switch>
        </Router>);

export default App;
