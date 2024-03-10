import { FaStar } from 'react-icons/fa6';

const BookCardLarge = ({ author, img, name, price, stars }: Book) => {
  return (
    <div className="p-4 text-slate-800 bg-white shadow-lg flex flex-col gap-4 w-full rounded hover:bg-amber-100 transition">
      <div className="flex justify-center items-center bg-amber-100 border-amber-300 border p-2 rounded">
        <img src={img} alt={name} className="size-64 object-contain" />
      </div>
      <h3 className="font-bold min-h-[48px] flex items-center">{name}</h3>
      <h3 className="font-semibold">{author}</h3>
      <span className="font-bold text-amber-500">${price / 100}</span>
      <span className="flex">
        {Array.from(Array(stars || 3).keys()).map((num) => {
          return <FaStar key={num} className="text-amber-400" />;
        })}
      </span>
    </div>
  );
};
export default BookCardLarge;
