import axios from 'axios';

const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';

const defaultState = {
  data: [],
  loading: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return{
        ...state,
        data: [],
        loading: true
      };
    case GET_PRODUCT_SUCCESS:
      return{
        ...state,
        loading: false,
        data: payload
      };
    default:
      return state;
  }
};

export const getProduct = (productType) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios.get('./db.json')
    .then((res) => {
      if (productType === 'MEN') {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.filter((item) => item.option === 'men') })
      } else if(productType === 'WOMEN')  {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.filter((item) => item.option === 'women') })
      }
    });
    // .catch((error) => dispatch({ type: GET_PRODUCT_FAILURE, payload: error }));
  
  // await axios.get('http://localhost:3001/data').then((res) => { dispatch({ type: GET_PRODUCT, payload: res.data }); });
  // только перед тем как использовать выше закомментированный метод пропишите в консоле npm run db
};
    // case GET_PRODUCT_WOMEN:
    //   return {
    //     ...state,
    //     data: payload.filter((item) => item.option === 'women'),
    //   };
    // case GET_PRODUCT_MEN:
    //   return {
    //     ...state,
    //     data: payload.filter((item) => item.option === 'men'),
    //   };
    // case GET_PRODUCT_ALL:
    //   return {
    //     ...state,
    //     data: payload,
    //   };