import React from 'react';
import { useSelector } from 'react-redux';
import {
  NavLink,
  // Route,
  // Switch,
} from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  const bag = useSelector((state) => state.bag.bag);
  let sumPrice = 0;
  bag.forEach((item) => {
    sumPrice += item.product.price * item.product.quantity;
  });
  if (sumPrice === 0) {
    sumPrice = 'ПУСТА';
  } else {
    sumPrice += ' руб';
  }
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/Women">женщины</NavLink>
        </li>
        <li>
          <NavLink to="/Men">мужчины</NavLink>
        </li>
      </ul>
      <NavLink to="/Bag">
        КОРЗИНА<p>{String(sumPrice)}</p>
      </NavLink>
    </div>
  );
};

export default Nav;
