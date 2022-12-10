export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_DELL = 'BASKET_DELL';
export const BASKET_ADD_FROM_BD = 'BASKET_ADD_FROM_BD';

export const basketAdd = (basket) => ({
  type: BASKET_ADD, payload: basket,
});

export const basketDel = (basket) => ({
  type: BASKET_DELL, payload: basket,
});

export const BasketAddFromBd = (basket) => ({
  type: BASKET_ADD_FROM_BD, payload: basket,
});
