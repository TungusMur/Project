import checkingBag from './checkingBag';

export const ADD_PRODUCT_IN_BAG = "ADD_PRODUCT_IN_BAG";

const defaultStateBag = {
  bag: []
};

export default (state = defaultStateBag, { type, payload }) => {
  switch(type) {
    case ADD_PRODUCT_IN_BAG:
      return{
        ...state,
        bag: checkingBag(state, payload)
      }
    default:
      return state;
  };
};

export const addInBag = (actionType, product) => (dispatch) => {
  dispatch({type: actionType, payload: product});
};