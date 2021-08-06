import React from 'react';
import { useSelector } from 'react-redux';
import ProductInformation from './productInformation';

const Bag = () => {
  const bag = useSelector((state) => state.bag.bag);
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
        <ProductInformation key={item.product.id + item.product.option} product={item.product}/>
      ))}
      <div className="bagInformation">
        <h2>Информация о покупке</h2>
        <div className="productQuantity">кол-во товара:
          {productQuantity}
        </div>
        <br></br>
        <div className="finalPrice">итого:
          {finalPrice}
        </div>
      </div>
    </div>
  );
};

export default Bag;
