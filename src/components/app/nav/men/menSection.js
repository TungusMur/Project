import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../../../redux/modules/shelfOfProducts/product';
import Post from '../../../post';
import { actionBag, ADD_PRODUCT_IN_BAG } from '../../../../redux/modules/bag/bag';

const Men = ({ data, get, bag }) => {
  useEffect(() => {
    get('MEN');
  },
  [get]);
  return (
    <div className="stall">
      {data.map((item) => (
        <Post key={item.id + item.option} product={item} bag={(e) => bag(ADD_PRODUCT_IN_BAG, e)}/>
      ))}
    </div>
  );
};

export default connect(
  ({ data }) => ({ data: data.data }),
  {
    get: getProduct,
    bag: actionBag,
  },
)(Men);
