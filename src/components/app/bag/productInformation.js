import React from 'react';

const ProductInformation = ({ product, decreaseQuantity, increaseQuantity }) => (
      <div className="product">
          <img src={ product.img } alt={ product.img }/>
          <div className="product-information">
            <div className="product-name">{ product.name }</div>
            <div className="price">
                <p>Цена: {product.price * product.quantity}</p>
                <p>Количество:
                    <button onClick={() => decreaseQuantity(product)}>-</button>
                    {product.quantity}
                    <button onClick={() => increaseQuantity(product)}>+</button>
                </p>
            </div>
          </div>
      </div>
);

export default ProductInformation;
