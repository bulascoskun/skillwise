import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { useParams } from 'react-router-dom';
import { addItem, removeItem } from '../state/shoppingCart/shoppingCartSlice';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface AddToCartButton {
  author: string;
  img: string;
  name: string;
  price: number;
}

const AddToCartButton = ({ author, img, name, price }: AddToCartButton) => {
  const { id: itemId } = useParams() as { id: string };

  const itemsList = useSelector(
    (state: RootState) => state.shoppingCart.itemsList
  );
  const singleItemCount =
    itemsList.find((item) => item.itemId === itemId)?.singleItemCount || 0;

  const dispatch = useDispatch<AppDispatch>();
  const isItemInCart = itemsList.some((item) => item.itemId === itemId);

  return (
    <>
      {isItemInCart ? (
        <>
          <button
            onClick={() => {
              dispatch(removeItem(itemId));
            }}
          >
            <FaMinus />
          </button>
          <button
            onClick={() => {
              dispatch(addItem({ itemId, author, img, name, price }));
            }}
            className="flex items-center gap-4 font-semibold rounded-lg py-2 px-4 bg-amber-500 hover:bg-amber-400 transition"
          >
            Item added ({singleItemCount})
          </button>
          <button
            onClick={() => {
              dispatch(addItem({ itemId, author, img, name, price }));
            }}
          >
            <FaPlus />
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(addItem({ itemId, author, img, name, price }));
          }}
          className="font-semibold rounded-lg py-2 px-4 bg-amber-500 hover:bg-amber-400 transition"
        >
          Add to cart
        </button>
      )}
    </>
  );
};
export default AddToCartButton;
