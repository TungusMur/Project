import React from 'react';
import { connect } from 'react-redux';
import ProductInformation from './productInformation';
import { actionBag, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../../../redux/modules/bag/bag';
import './bag.scss';

const Bag = ({ bag, action }) => {
  let productQuantity = 0;
  let finalPrice = 0;
  bag.forEach((item) => {
    productQuantity += item.product.quantity;
    finalPrice += item.product.price * item.product.quantity;
  });
  let information = '';
  if (bag.length === 0) {
    information = 'В КОРЗИНЕ НЕТ ТОВАРОВ';
  }
  return (
    <div className="bag">
      <h1>{information}</h1>
      <div className="bag-volume">
        {bag.map((item) => (
          <ProductInformation key={item.product.id + item.product.option} product={item.product}
          decreaseQuantity ={(e) => action(DECREASE_QUANTITY, e)}
          increaseQuantity ={(e) => action(INCREASE_QUANTITY, e)}/>
        ))}
      </div>
      <div className="bag-information">
        <h2>Информация о покупке</h2>
        <div className="product-quantity">Кол-во товара: {productQuantity}</div>
        <div className="final-price">Итоговая цена: {finalPrice}</div>
      </div>
    </div>
  );
};

export default connect(
  ({ bag }) => ({ bag: bag.bag }),
  {
    action: actionBag,
  },
)(Bag);
