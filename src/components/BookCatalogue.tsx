import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import bookInfo from '../assets/bookInfo.js';
import BookCardLarge from './BookCardLarge.js';
import LeftDisplay from './LeftDisplay.js';
import CatalogueButton from './CatalogueButton.js';
import PaginationButton from './PaginationButton.js';

const BookCatalogue = () => {
  return (
    <section className="container m-auto mt-20 flex justify-between">
      {/* LEFT */}
      <div className="w-[25%] flex flex-col">
        <LeftDisplay title="Popular Books" data={bookInfo} />
        <LeftDisplay title="New Arrivals" data={bookInfo} />
      </div>

      {/* RIGHT */}
      <div className="w-[65%]">
        {/* BUTTONS */}
        <div className="flex gap-x-4 justify-between items-start mb-4">
          <CatalogueButton title="All Books" />
          <CatalogueButton title="For Kids" />
          <CatalogueButton title="High School" />
          <CatalogueButton title="College" />
        </div>
        {/* SEARCH / SORT AREA */}
        <div className="flex items-center justify-between mb-4">
          <input
            className="px-8 py-2 border border-gray-300 rounded-[10rem] focus:outline-none focus:border-blue-500 w-[66%]"
            type="search"
            placeholder="Search Book Name, Author"
          />
          <select className="ml-4 px-8 py-2 border border-gray-300 rounded-[10rem] focus:outline-none focus:border-blue-500 w-[32%]">
            <option value="all">All</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>

        {/* LARGE BOOK CARDS */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 justify-items-center">
          {bookInfo.map((book) => (
            <BookCardLarge key={book.id} {...book} />
          ))}
          {bookInfo.map((book) => (
            <BookCardLarge key={book.id} {...book} />
          ))}
        </div>

        <div className="my-8 flex justify-center gap-2">
          <PaginationButton element={<MdKeyboardArrowLeft />} />
          <PaginationButton element="1" />
          <PaginationButton element={<MdKeyboardArrowRight />} />
        </div>
      </div>
    </section>
  );
};
export default BookCatalogue;
