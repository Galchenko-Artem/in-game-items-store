import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
  userStore: userReducer,
});

export const store = configureStore({ reducer });
