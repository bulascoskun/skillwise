import { FaStar } from 'react-icons/fa6';

const BookCardLarge = ({ author, img, name, price, stars }: Book) => {
  return (
    <div
      title={name}
      className="p-4 text-slate-800 bg-white shadow-lg flex flex-col gap-2 w-full max-w-[275px] rounded
     hover:bg-amber-100 transition text-sm"
    >
      <img src={img} alt={name} className=" object-contain rounded mb-2" />
      <h3 className="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
        {name}
      </h3>
      <h3 className="font-semibold">{author}</h3>
      <div className="flex items-center justify-between">
        <span className="flex">
          {Array.from(Array(stars || 3).keys()).map((num) => {
            return <FaStar key={num} className="text-amber-400" />;
          })}
        </span>
        <span className="font-bold text-amber-500">${price / 100}</span>
      </div>
    </div>
  );
};
export default BookCardLarge;
