import * as type from '../actions/basketAction';

export const basketReducer = (state = { busket: null }, action) => {
  switch (action.type) {
    case type.BASKET_ADD:
      return { ...state, busket: action.payload };

    case type.BASKET_DELL:
      return { ...state, busket: action.payload };

    default:
      return state;
  }
};
