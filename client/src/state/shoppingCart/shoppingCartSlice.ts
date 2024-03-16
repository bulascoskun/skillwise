import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getItemsFromLocalStorage } from '../../utils/getItemsFromLocalStorage';

const initialState: ShoppingCartType = getItemsFromLocalStorage();

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemType>) => {
      const { itemId, author, img, name, price } = action.payload;

      const singleItem = state.itemsList.find((item) => {
        return item.itemId === itemId;
      });
      if (!singleItem) {
        state.itemsList.push({
          itemId,
          singleItemCount: 1,
          author,
          img,
          name,
          price,
        });
      } else {
        singleItem.singleItemCount += 1;
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;

      const singleItemIndex = state.itemsList.findIndex(
        (item) => item.itemId === itemId
      );

      if (singleItemIndex === -1) return state;

      if (state.itemsList[singleItemIndex].singleItemCount === 1) {
        state.itemsList.splice(singleItemIndex, 1);
      } else {
        state.itemsList[singleItemIndex].singleItemCount -= 1;
      }
    },

    removeWholeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;

      const singleItemIndex = state.itemsList.findIndex(
        (item) => item.itemId === itemId
      );

      if (singleItemIndex === -1) return state;

      state.itemsList.splice(singleItemIndex, 1);
    },

    clearCart: (state) => {
      state.itemsList = [];
    },
  },
});

export const selectTotalItemCount = (state: RootState) => {
  let sum = 0;
  state.shoppingCart.itemsList.forEach((item) => {
    sum += item.singleItemCount;
  });
  return sum;
};

export const calculateTotalValue = (state: RootState) => {
  let sum = 0;
  state.shoppingCart.itemsList.forEach((item) => {
    sum += item.singleItemCount * item.price;
  });
  return sum;
};

export const { addItem, removeItem, clearCart, removeWholeItem } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
