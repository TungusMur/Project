import checkingBag from './checkingBag';
import settingQuantity from './settingQuantity';

export const ADD_PRODUCT_IN_BAG = 'ADD_PRODUCT_IN_BAG';
export const SETTING_QUANTITY = 'SETTING_QUANTITY';
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
    case SETTING_QUANTITY:
      return {
        ...state,
        bag: settingQuantity(state, payload),
        loading: false,
      };
    default:
      return state;
  }
};

export const addInBag = (actionType, product) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST, payload: [] });
  dispatch({ type: actionType, payload: product });
};
