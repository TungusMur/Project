import React from 'react';

const ProductInformation = ({ product, decreaseQuantity, increaseQuantity }) => (
      <div className="product">
          <h1>{ product.name }</h1>
          <img src={ product.img } alt={ product.img }/>
          <p>Цена {product.price * product.quantity}</p>
          <p>Количество
              <button onClick={() => decreaseQuantity(product)}>-</button>
              {product.quantity}
              <button onClick={() => increaseQuantity(product)}>+</button>
          </p>
      </div>
);

export default ProductInformation;
