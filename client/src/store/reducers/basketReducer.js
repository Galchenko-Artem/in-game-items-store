import * as type from '../actions/basketAction';

export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case type.BASKET_ADD:
      return [action.payload, ...state];

    case type.BASKET_DELL:
      return state.filter((el) => el.id !== action.payload);

    default:
      return state;
  }
};
