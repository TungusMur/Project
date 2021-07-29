import React from "react";
import Women from "./women/women";
import Men from "./men/men";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export default class Nav extends React.Component{
    render(){
        return(
            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="/Women">Женщины</Link>
                        </li>
                        <li>
                            <Link to="/Men">Мужчины</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/Women" component={Women}/>
                    <Route path="/Men" component={Men}/>
                </Switch>
            </div> 
        );
    }
}