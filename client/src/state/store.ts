import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCart/shoppingCartSlice';
import { localStorageMiddleware } from '../utils/localStorageMiddleWare';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
