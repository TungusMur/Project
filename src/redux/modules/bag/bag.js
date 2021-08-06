import checkingBag from './checkingBag';

export const ADD_PRODUCT_IN_BAG = 'ADD_PRODUCT_IN_BAG';
const GET_PRODUCT_REQUEST = 'GET_BAG_REQUEST';

const defaultStateBag = {
  bag: [],
  loading: false,
};

export default (state = defaultStateBag, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_IN_BAG:
      return {
        ...state,
        bag: checkingBag(state, payload),
        loading: false,
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        bag: state.bag,
        loading: true,
      };
    default:
      return state;
  }
};

export const addInBag = (actionType, product) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST, payload: [] });
  dispatch({ type: actionType, payload: product });
};
