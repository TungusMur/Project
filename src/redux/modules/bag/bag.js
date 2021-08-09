import checkingBag from './checkingBag';
import increaseQuantity from './increaseQuantity';
import decreaseQuantity from './decreaseQuantity ';

export const ADD_PRODUCT_IN_BAG = 'ADD_PRODUCT_IN_BAG';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

const defaultStateBag = {
  bag: [],
  loading: false,
};

export default (state = defaultStateBag, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_IN_BAG:
      return {
        ...state,
        bag: [...checkingBag(state, payload)],
        loading: false,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        bag: [...increaseQuantity(state, payload)],
        loading: false,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        bag: [...decreaseQuantity(state, payload)],
        loading: false,
      };
    default:
      return state;
  }
};

export const actionBag = (actionType, product) => (dispatch) => {
  dispatch({ type: actionType, payload: product });
};
