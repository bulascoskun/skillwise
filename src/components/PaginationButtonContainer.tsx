import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import PaginationButton from './PaginationButton';
import { useLocation, useNavigate } from 'react-router-dom';

const PaginationButtonContainer = ({
  currentPage,
  numOfPages,
}: {
  currentPage: number;
  numOfPages: number;
}) => {
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber.toString());
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="my-8 flex justify-end gap-2">
      <PaginationButton
        isActive={false}
        element={<MdKeyboardArrowLeft />}
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) {
            prevPage = numOfPages;
          }
          return handlePageChange(prevPage);
        }}
      />
      {pages.map((page) => {
        return (
          <PaginationButton
            isActive={page === currentPage}
            key={page}
            element={page}
            onClick={() => {
              return handlePageChange(page);
            }}
          />
        );
      })}
      <PaginationButton
        isActive={false}
        element={<MdKeyboardArrowRight />}
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) {
            nextPage = 1;
          }
          return handlePageChange(nextPage);
        }}
      />
    </div>
  );
};
export default PaginationButtonContainer;
