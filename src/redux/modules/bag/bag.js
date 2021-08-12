import checkingBag from './checkingBag';
import increaseQuantity from './increaseQuantity';
import decreaseQuantity from './decreaseQuantity';
import removingProductFromBag from './removingProductFromBag';

export const ADD_PRODUCT_IN_BAG = 'ADD_PRODUCT_IN_BAG';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVING_PRODUCT_FROM_BAG = 'REMOVING_PRODUCT_FROM_BAG';

const defaultStateBag = {
  bag: [],
};

export default (state = defaultStateBag, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_IN_BAG:
      return {
        ...state,
        bag: [...checkingBag(state, payload)],
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        bag: [...increaseQuantity(state, payload)],
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        bag: [...decreaseQuantity(state, payload)],
      };
    case REMOVING_PRODUCT_FROM_BAG:
      return {
        ...state,
        bag: [...removingProductFromBag(state, payload)],
      };
    default:
      return state;
  }
};

export const actionBag = (actionType, product) => (dispatch) => {
  dispatch({ type: actionType, payload: product });
};
