import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost, GET_PRODUCT_WOMEN } from '../../../../redux/modules/posts'
import Post from '../../../post';

const App = ({ data, getPost}) => {
    useEffect(() => {
        getPost(GET_PRODUCT_WOMEN);
    }, []);
    return(
        <div className="stall">
            {data.map(item => (<Post key={item.id+item.option} id={item.id} img={item.img} name={item.name} category={item.category} price={item.price} option={item.option}/>))}
        </div>
    );
};

export default connect(
    ({data}) => ({data: data.data}),
    {
        getPost: getPost
    }
)(App);