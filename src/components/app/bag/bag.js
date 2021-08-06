import React from 'react';
import { useSelector } from 'react-redux';
import ProductInformation from './productInformation';

const Bag = () => {
  const bag = useSelector(state => state.bag.bag);
  console.log(bag);
  console.log(typeof bag)
  return(
    <div>
     { bag.map((item) => (<ProductInformation key={item.product.id + item.product.option} product={item.product}/>))}
    </div>
  );
};

export default Bag;
//<ProductInformation key={item.product.id + item.product.option} info={item.product}/>