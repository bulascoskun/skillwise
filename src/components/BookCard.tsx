import { FaStar } from 'react-icons/fa';

const BookCard = ({ author, img, name, price, stars }: BookInfo) => {
  return (
    <div
      title={name}
      className="flex p-2 h-36 items-center rounded-md gap-4 bg-white shadow text-sm hover:bg-amber-100"
    >
      <img
        src={img}
        alt={name}
        className="max-h-[90%] object-contain rounded-md"
      />
      <div className="flex flex-col justify-center gap-2  w-full">
        <span className="flex">
          {Array.from(Array(stars).keys()).map((num) => {
            return <FaStar key={num} className="text-amber-400" />;
          })}
        </span>
        <h3 className=" font-bold whitespace-nowrap overflow-hidden overflow-ellipsis w-[80%]">
          {name}
        </h3>
        <span className="font-semibold">{author}</span>
        <span className="font-bold text-amber-600">${price / 100}</span>
      </div>
    </div>
  );
};
export default BookCard;
