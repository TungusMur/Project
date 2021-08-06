import React from 'react';

const ProductInformation = ({ product }) => (
      <div className="product">
          <h1>{ product.name }</h1>
          <img src={ product.img } alt={ product.img }/>
          <p>Цена {product.price * product.quantity}</p>
          <p>Количество {product.quantity}</p>
      </div>
);

export default ProductInformation;
