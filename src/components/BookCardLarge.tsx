import { FaStar } from 'react-icons/fa6';

const BookCardLarge = ({ author, img, name, price, stars }: BookInfo) => {
  return (
    <div className="p-4 bg-white shadow-lg flex flex-col gap-2">
      <img src={img} alt={name} className=" object-contain mb-4" />
      <h3 className="font-bold">{name}</h3>
      <h3 className="font-semibold">{author}</h3>
      <span className="font-bold text-amber-500">${price / 100}</span>
      <span className="flex">
        {Array.from(Array(stars).keys()).map((num) => {
          return <FaStar key={num} className="text-amber-400" />;
        })}
      </span>
    </div>
  );
};
export default BookCardLarge;
