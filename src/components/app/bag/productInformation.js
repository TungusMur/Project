import React from 'react';

const ProductInformation = ({ product, decreaseQuantity, increaseQuantity, removingProductFromBag }) => (
  <div className="product">
    <img src={product.img} alt={product.img} />
    <div className="product-information">
      <div className="product-name">{product.name}</div>
      <div className="price">
        <p>Цена: {product.price * product.quantity}</p>
        <div className="quantity-setting">
          <p>Количество:</p>
          <button onClick={() => decreaseQuantity(product)}>-</button>
          <p>{product.quantity}</p>
          <button onClick={() => increaseQuantity(product)}>+</button>
        </div>
      </div>
    </div>
    <button className="cross" onClick={() => removingProductFromBag(product)}>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  </div>
);

export default ProductInformation;
