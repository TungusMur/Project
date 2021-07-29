import { product } from '../../data';

export const GET_PRODUCT_WOMEN = 'GET_PRODUCT_WOMEN';
export const GET_PRODUCT_MEN = 'GET_PRODUCT_MEN';
export const GET_PRODUCT_ALL = 'GET_PRODUCT_ALL';


const defaultState = {
    data: []
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCT_WOMEN:
            return {...state, data: payload.filter(item => (item.option === "women"))};
        case GET_PRODUCT_MEN:
            return {...state, data: payload.filter(item => (item.option === "men"))};
        case GET_PRODUCT_ALL:
            return {...state, data: payload};
        default: 
            return state;
    };
};

export const getPost = (GET_PRODUCT) => (dispatch) => {
    try{
        dispatch({type: GET_PRODUCT, payload: product});
    } catch(error) {
        console.log(error);
    };
};