import moment from 'moment';
import { OrderModal } from '.';
import { useState } from 'react';

const MyOrdersList = ({ orderData }: { orderData: OrderData }) => {
  const [selectedOrder, setSelectedOrder] = useState<OrderDataItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (order: OrderDataItem) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col overflow-hidden min-w-full py-2 sm:px-6 lg:px-8 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <table className="min-w-full text-left text font-semibold text-surface text-slate-800">
        <thead className="border-b border-amber-600">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Order Total
            </th>
            <th scope="col" className="px-6 py-4">
              Order Date
            </th>
            <th scope="col" className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order, i) => {
            const { totalValue, createdAt } = order;
            return (
              <tr key={i} className="border-b border-amber-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {i + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  ${(totalValue / 100).toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </td>
                <td
                  onClick={() => {
                    handleModal(order);
                  }}
                  className="whitespace-nowrap px-6 py-4 font-bold text-amber-600 hover:text-amber-500 transition cursor-pointer"
                >
                  See More
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isModalOpen && selectedOrder !== null && (
        <OrderModal
          items={selectedOrder.items}
          totalValue={selectedOrder.totalValue}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default MyOrdersList;
