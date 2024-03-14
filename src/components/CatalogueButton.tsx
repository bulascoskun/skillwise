import { useLocation, useNavigate } from 'react-router-dom';

const CatalogueButton = ({
  title,
  value,
  isActive,
}: {
  title: string;
  value: string;
  isActive: boolean;
}) => {
  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('category', value);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <button
      type="button"
      className={`
      w-[25%] py-2 rounded-[10rem] font-semibold transition
      ${isActive ? 'bg-amber-600' : 'bg-amber-400'} 
      ${isActive ? 'text-slate-100' : 'text-slate-700'}
      ${isActive ? 'hover:bg-amber-500' : 'hover:bg-amber-300'}
      `}
      onClick={handlePageChange}
    >
      {title}
    </button>
  );
};
export default CatalogueButton;
