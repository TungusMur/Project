import React from 'react';
import { connect } from 'react-redux';

import ProductInformation from './productInformation';
import { addInBag, SETTING_QUANTITY } from '../../../redux/modules/bag/bag';

const Bag = ({ bag, actionBag }) => {
  let productQuantity = 0;
  let finalPrice = 0;
  bag.forEach((item) => {
    productQuantity += item.product.quantity;
    finalPrice += item.product.price * item.product.quantity;
  });
  let information = '';
  if (bag.length === 0) {
    information = 'корзина пустая';
  }
  return (
    <div className="bag">
      <h1>{information}</h1>
      {bag.map((item) => (
        <ProductInformation key={item.product.id + item.product.option} product={item.product}
        actionBag={(e) => actionBag(SETTING_QUANTITY, e)}/>
      ))}
      <div className="bagInformation">
        <h2>Информация о покупке</h2>
        <div className="productQuantity">Кол-во товара: {productQuantity}</div>
        <br></br>
        <div className="finalPrice">Итоговая цена: {finalPrice}</div>
      </div>
    </div>
  );
};

export default connect(
  ({ bag }) => ({ bag: bag.bag }),
  {
    actionBag: addInBag,
  },
)(Bag);
