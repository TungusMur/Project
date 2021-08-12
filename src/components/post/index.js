import React from 'react';
import './post.scss';

const Post = ({ product, bag }) => (
  <div className="card">
    <p className="name-produсt">{product.name}</p>
    <img src={product.img} alt={product.img} />
    <div className="price">
      <p>{product.price} руб</p>
      <button onClick={() => bag(product)}>
        <p>В корзину</p>
      </button>
    </div>
  </div>
);

export default Post;
