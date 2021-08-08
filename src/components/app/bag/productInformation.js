import React from 'react';

const ProductInformation = ({ product, actionBag }) => (
      <div className="product">
          <h1>{ product.name }</h1>
          <img src={ product.img } alt={ product.img }/>
          <p>Цена {product.price * product.quantity}</p>
          <p>Количество
              <button onClick={() => actionBag(product)}>-</button>
              {product.quantity}
              <button>+</button>
          </p>
      </div>
);

export default ProductInformation;
