import React, { useState } from 'react';

const Info = ({ item, element }) => {
  const [s, setS] = useState(item.quantity);
  const Sum = () => {
    setS(Number(s) + 1);
  };
  const Deduct = () => {
    setS(Number(s) - 1);
  };
  return (
    <div className="product" >
      <img src={ element.img } alt={ element.img }/>
      <h1>{element.name}</h1>
      <p>Количество
      <button className="deduct" onClick={ Deduct }>+</button>
      {s}
      <button className="sum" onClick={ Sum }>-</button>
      </p>
      <p>Цена {s * element.price}</p>
    </div>
  );
};
export default Info;
