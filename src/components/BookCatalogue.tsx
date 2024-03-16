import BookCardLarge from './BookCardLarge.js';
import LeftDisplay from './LeftDisplay.js';
import BookSearch from './BookSearch.js';
import PaginationButtonContainer from './PaginationButtonContainer.js';

const BookCatalogue = ({
  bookData,
  searchValues,
}: {
  bookData: {
    books: Book[];
    currentPage: number;
    numOfPages: number;
    newestBooks: Book[];
    popularBooks: Book[];
  };
  searchValues: BookSearchValues;
}) => {
  const { books, currentPage, numOfPages, newestBooks, popularBooks } =
    bookData;

  return (
    <section className="container px-4 sm:m-auto mt-20 flex justify-between">
      <div className="hidden xl:flex w-[27%]  flex-col">
        <LeftDisplay title="Popular Books" data={popularBooks} />
        <LeftDisplay title="New Arrivals" data={newestBooks} />
      </div>

      <div className="w-full xl:w-[65%]">
        <BookSearch searchValues={searchValues} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 justify-items-center mt-8 sm:mt-0">
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
