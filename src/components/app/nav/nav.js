import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Women from './women/womenSection';
import Men from './men/menSection';

const Nav = () => (
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
        <Route component={ Women } path="/Women" />
        <Route component={ Men } path="/Men" />
      </Switch>
    </div>
);

export default Nav;
