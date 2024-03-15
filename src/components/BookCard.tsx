import { NavLink } from 'react-router-dom';
import Stars from './Stars';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BookCard = ({ _id, author, img, name, price, stars }: Book) => {
  return (
    <NavLink
      to={`/shop/${_id}`}
      title={name}
      className="flex p-2 h-36 items-center rounded-md gap-4 bg-white shadow text-sm hover:bg-amber-100"
    >
      <LazyLoadImage
        className="max-h-[100%] object-contain rounded-md bg-gray-200"
        src={img}
        alt={name}
        width={'110px'}
        height={'200px'}
      />

      <div className="flex flex-col justify-center gap-2  w-full">
        <Stars stars={stars} />
        <h3 className="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis w-[80%]">
          {name}
        </h3>
        <span className="font-semibold">{author}</span>
        <span className="font-bold text-amber-600">${price / 100}</span>
      </div>
    </NavLink>
  );
};
export default BookCard;
