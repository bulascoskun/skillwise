import { FaTimes } from 'react-icons/fa';

const OrderModal = ({
  items,
  totalValue,
  closeModal,
}: {
  items: {
    _id: string;
    name: string;
    price: number;
    singleItemCount: number;
  }[];
  totalValue: number;
  closeModal: () => void;
}) => {
  return (
    <section className="top-0 left-0 fixed w-dvw h-dvh bg-[#000000a4] flex items-center justify-center">
      <div className="container max-w-[700px] bg-white rounded-lg shadow p-4 pt-8 relative">
        <FaTimes
          className="absolute top-3 right-2 cursor-pointer"
          onClick={closeModal}
        />
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-center">Book Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Count</th>
              <th className="text-center">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { name, price, singleItemCount, _id } = item;
              return (
                <tr key={_id}>
                  <td className="py-2 px-4 border-b">{name}</td>
                  <td className="py-2 px-4 border-b text-center">
                    ${(price / 100).toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {singleItemCount}
                  </td>
                  <td className="py-2 px-4 border-b  text-center">
                    ${(singleItemCount * (price / 100)).toFixed(2)}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="py-2 px-4 font-semibold">
                Order Total: ${(totalValue / 100).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default OrderModal;
