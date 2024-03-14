export const getItemsFromLocalStorage = () => {
  const storedShoppingCart = localStorage.getItem('shoppingCart');

  const defaultShoppingCart: ShoppingCartType = {
    itemsList: [],
  };

  const parsedItemsList = storedShoppingCart
    ? JSON.parse(storedShoppingCart)
    : defaultShoppingCart;

  return parsedItemsList;
};
