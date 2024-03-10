import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import BookCardLarge from './BookCardLarge.js';
import LeftDisplay from './LeftDisplay.js';
import PaginationButton from './PaginationButton.js';
import BookSearch from './BookSearch.js';

const BookCatalogue = ({ bookData }: { bookData: any }) => {
  const { newestBooks, popularBooks, books } = bookData;

  return (
    <section className="container m-auto mt-20 flex justify-between">
      {/* LEFT */}
      <div className="w-[25%] flex flex-col">
        <LeftDisplay title="Popular Books" data={popularBooks} />
        <LeftDisplay title="New Arrivals" data={newestBooks} />
      </div>

      {/* RIGHT */}
      <div className="w-[65%]">
        {/* SEARCH */}
        <BookSearch />

        {/* LARGE BOOK CARDS */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 justify-items-center">
          {books.map((book: Book) => (
            <BookCardLarge key={book._id} {...book} />
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
