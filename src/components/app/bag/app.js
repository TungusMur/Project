import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost, GET_PRODUCT_ALL } from '../../../redux/modules/posts';
import Product from './product';

const App = ({ data, getPost }) => {
    useEffect(() => {
        getPost(GET_PRODUCT_ALL);
    }, []);
    return(
        <Product data={data}/>
    );
};

export default connect(
    ({data}) => ({data: data.data}),
    {
        getPost: getPost
    }
)(App)