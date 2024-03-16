import { toast } from 'react-toastify';
import customFetch from '../assets/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import { MyOrdersList, ShowEmpty } from '../components';

export const loader = async () => {
  try {
    const { data } = await customFetch('/books/myorders');
    return data;
  } catch (error) {
    toast.error('There was an error');
    return redirect('/welcome');
  }
};

const MyOrders = () => {
  const orderData = useLoaderData() as OrderData;

  const isEmpty = orderData.length === 0;

  return (
    <section
      className="container m-auto p-8 text-slate-800 rounded-lg shadow my-16
    bg-gradient-to-r from-amber-300 to-yellow-200"
    >
      <h2 className="font-bold text-3xl mb-8">My Orders</h2>

      {isEmpty ? (
        <ShowEmpty string="You Have No Orders" />
      ) : (
        <MyOrdersList orderData={orderData} />
      )}
    </section>
  );
};
export default MyOrders;
