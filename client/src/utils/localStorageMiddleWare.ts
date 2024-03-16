// @ts-ignore
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem(
    'shoppingCart',
    JSON.stringify(store.getState().shoppingCart)
  );
  return result;
};
