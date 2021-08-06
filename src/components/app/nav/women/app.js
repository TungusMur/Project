import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../../../redux/modules/posts';
import Post from '../../../post';
import { addInBag } from '../../../../redux/modules/bag';
import { ADD_PRODUCT_IN_BAG } from '../../../../redux/modules/bag';


const App = ({ data, get, bag }) => {
  useEffect(() => {
    get("WOMEN");
  },
    []);
  return (
    <div className="stall">
      {data.map((item) => (
        <Post key={item.id + item.option} product={item} bag={(e) => bag(ADD_PRODUCT_IN_BAG, e)}/>))}
    </div>
  );
};

export default connect(
  ({ data }) => ({ data: data.data }),
  {
    get: getProduct,
    bag: addInBag
  },
)(App);