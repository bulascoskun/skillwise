import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import {
  addItem,
  removeItem,
  removeWholeItem,
} from '../state/shoppingCart/shoppingCartSlice';

const ShoppingCartCard = ({
  itemId,
  author,
  img,
  name,
  price,
  singleItemCount,
}: ItemListItem) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      title={name}
      className="flex p-4 h-44 items-center rounded-md gap-4 bg-white shadow"
    >
      <img
        src={img}
        alt={name}
        className="max-h-[100%] object-contain rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold w-full">{name}</h3>
        <span className="font-semibold">{author}</span>
      </div>

      <div className="flex gap-4 ml-auto items-center font-semibold">
        <div className="flex justify-center items-center gap-4">
          {singleItemCount !== 1 && (
            <button
              className="text-2xl text-amber-600 hover:text-amber-700 transition"
              onClick={() => {
                dispatch(removeItem(itemId));
              }}
            >
              <FaCircleMinus />
            </button>
          )}
          <span className="text-xl font-bold mb-[2px]">{singleItemCount}</span>
          <button
            className="text-2xl text-amber-600 hover:text-amber-700 transition"
            onClick={() => {
              dispatch(addItem({ itemId, author, img, name, price }));
            }}
          >
            <FaCirclePlus />
          </button>
        </div>

        <span className="font-bold text-xl text-amber-600 min-w-[5rem] flex items-center justify-center">
          ${(singleItemCount * (price / 100)).toFixed(2)}
        </span>
        <button
          className="p-1 text-white bg-amber-600 hover:bg-amber-700 transition rounded shadow"
          onClick={() => {
            dispatch(removeWholeItem(itemId));
          }}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};
export default ShoppingCartCard;
