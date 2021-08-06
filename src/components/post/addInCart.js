import React from 'react';

const AddInBag = ({ id, option }) => {
  const add = () => {
    try {
      let checkbox = true;
      const data = JSON.parse(localStorage.getItem('basket'));
      data.forEach((item) => {
        if (item.id === id && item.option === option) {
          data[item].quantity = Number(data[item].quantity) + 1;
          localStorage.setItem('basket', JSON.stringify(data));
          checkbox = false;
        }
      });
      if (checkbox) {
        const quantity = 1;
        data.push({
          id,
          option,
          quantity,
        });
        localStorage.setItem('basket', JSON.stringify(data));
      }
    } catch {
      const data = [];
      const quantity = 1;
      data.push({
        id,
        option,
        quantity,
      });
      localStorage.setItem('basket', JSON.stringify(data));
    }
  };
  return (
    <button onClick={ add }>Добавить в корзину</button>
  );
};

export default AddInBag;
