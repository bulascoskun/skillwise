import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import ShoppingCartCard from '../components/ShoppingCartCard';
import {
  calculateTotalValue,
  clearCart,
} from '../state/shoppingCart/shoppingCartSlice';
import customFetch from '../assets/customFetch';
import { toast } from 'react-toastify';
import { ShowEmpty } from '../components';

const MyCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalValue = useSelector(calculateTotalValue);
  const shoppingCart = useSelector(
    (state: RootState) => state.shoppingCart.itemsList
  );
  const isCartEmpty = shoppingCart.length === 0;

  const orderData = {
    items: shoppingCart.map((item) => {
      const { name, price, singleItemCount } = item;
      return { name, price, singleItemCount };
    }),
    totalValue,
  };

  const handlePlaceOrder = async () => {
    try {
      await customFetch.post('/books/cart', orderData);
      dispatch(clearCart());
    } catch (error) {
      toast.error('There was an error :(');
    }
  };

  return (
    <section
      className="container m-auto p-8 text-slate-800 rounded-lg shadow my-16
    bg-gradient-to-r from-amber-300 to-yellow-200 flex flex-col gap-8"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">My Cart</h2>
        {!isCartEmpty && (
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
            className="text-white bg-amber-600 hover:bg-amber-700 transition py-1 px-2 rounded-lg font-bold text-lg"
          >
            Clear Cart
          </button>
        )}
      </div>

      {isCartEmpty ? (
        <ShowEmpty string="Your Cart Is Empty" />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {shoppingCart.map((book: ItemListItem) => {
              return <ShoppingCartCard key={book.itemId} {...book} />;
            })}
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-2xl">
              Total Price:{' '}
              <span className="text-amber-700">${totalValue / 100}</span>
            </h4>
            <button
              onClick={handlePlaceOrder}
              className="text-white bg-amber-600 hover:bg-amber-700 transition py-2 px-4 rounded-lg font-bold text-2xl"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </section>
  );
};
export default MyCart;
