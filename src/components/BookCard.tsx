import { FaStar } from 'react-icons/fa';

const BookCard = ({ author, img, name, price, stars }: BookInfo) => {
  return (
    <div className="flex p-2 h-36 items-center rounded-md gap-4 bg-white shadow w-[350px]">
      <img src={img} alt={name} className="max-h-[90%] object-contain" />
      <div className="flex flex-col justify-center gap-2">
        <span className="flex text-sm">
          {Array.from(Array(stars).keys()).map((num) => {
            return <FaStar key={num} className="text-amber-400" />;
          })}
        </span>
        <span className="font-bold">{name}</span>
        <span className="font-semibold">{author}</span>
        <span className="font-bold text-amber-600">${price / 100}</span>
      </div>
    </div>
  );
};
export default BookCard;
