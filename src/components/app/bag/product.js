import React from 'react';
import Info from './info';

const Product = ({ data }) => {
  const dataLocal = JSON.parse(localStorage.getItem('basket'));
  const state = {
    d: 0,
    s: 0,
  };
  const Sss = (item) => data.map((element) => {
    if (item.id === element.id && item.option === element.option) {
      state.s += state.s + element.price * item.quantity;
      return (
          <Info
            element={ element } item={ item }
            key={ item.id + item.option }
          />
      );
    }
    return (null);
  });

  return (
    <div className="bag">

      {dataLocal.map((item) => Sss(item))}

      <div className="info">
        <p>Информация о заказе</p>
        <p>Количество товара:</p>
        <p>Итогова цена: {state.s} </p>
      </div>
    </div>
  );
};
export default Product;
