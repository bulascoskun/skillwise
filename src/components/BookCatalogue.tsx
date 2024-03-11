import BookCardLarge from './BookCardLarge.js';
import LeftDisplay from './LeftDisplay.js';
import BookSearch from './BookSearch.js';
import PaginationButtonContainer from './PaginationButtonContainer.js';

const BookCatalogue = ({
  bookData,
  searchValues,
}: {
  bookData: any;
  searchValues: any;
}) => {
  const { books, currentPage, numOfPages, newestBooks, popularBooks } =
    bookData;

  return (
    <section className="container m-auto mt-20 flex justify-between">
      <div className="w-[27%] flex flex-col">
        <LeftDisplay title="Popular Books" data={popularBooks} />
        <LeftDisplay title="New Arrivals" data={newestBooks} />
      </div>

      <div className="w-[65%]">
        <BookSearch searchValues={searchValues} />
        <div className="grid grid-cols-4 gap-x-8 gap-y-8 justify-items-center">
          {books.map((book: Book) => (
            <BookCardLarge key={book._id} {...book} />
          ))}
        </div>
        {numOfPages > 1 && (
          <PaginationButtonContainer
            currentPage={currentPage}
            numOfPages={numOfPages}
          />
        )}
      </div>
    </section>
  );
};
export default BookCatalogue;
