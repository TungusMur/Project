import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Women from './women/women';
import Men from './men/men';

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
