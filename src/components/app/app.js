import React from "react";
import Home from "../../home/home"
import Nav from "./nav/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bag from "./bag/bag";

const App = () => {
    return(
        <Router>
            <div className="app">
                <Link to="/">
                    <h1>ОДЕЖДА МНЕ И КОМУ-ТО</h1>
                </Link>
                <Link to="/Bag">
                    <h1>Корзина</h1>
                </Link>
                <Nav/>
            </div>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/Bag" component={Bag}/>
            </Switch>
        </Router>
    );
};
export default App;