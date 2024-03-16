import { NavLink } from 'react-router-dom';
import Stars from './Stars';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BookCardLarge = ({ _id, author, img, name, price, stars }: Book) => {
  return (
    <NavLink
      to={`/shop/${_id}`}
      title={name}
      className="p-4 text-slate-800 bg-white shadow-lg flex flex-col gap-2 w-full max-w-[275px] rounded
     hover:bg-amber-100 transition text-sm"
    >
      <LazyLoadImage
        className="object-contain rounded mb-2 mx-auto bg-gray-200"
        src={img}
        alt={name}
        width={'193px'}
        height={'290px'}
      />

      <h3 className="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
        {name}
      </h3>
      <h3 className="font-semibold">{author}</h3>
      <div className="flex items-center justify-between">
        <Stars stars={stars} />
        <span className="font-bold text-amber-500">${price / 100}</span>
      </div>
    </NavLink>
  );
};
export default BookCardLarge;
