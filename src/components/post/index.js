import React from 'react';

const Post = ({ product, bag }) => <div className="card">
    <h1>{ product.name }</h1>
    <img src={ product.img } alt={ product.img }/>
    <p>{product.price}</p>
    <button onClick={() => bag(product)}> Добавить в корзину</button>
  </div>;

export default Post;
