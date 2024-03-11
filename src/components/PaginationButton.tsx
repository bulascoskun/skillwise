const PaginationButton = ({
  element,
  onClick,
  isActive,
}: {
  element: number | React.ReactNode;
  onClick: any;
  isActive: boolean;
}) => {
  return (
    <button
      className={`text-2xl size-12 rounded-lg shadow-sm flex justify-center items-center font-mono
      ${isActive ? 'bg-amber-600' : 'bg-amber-400'}
      ${isActive ? 'hover:bg-amber-500' : 'hover:bg-amber-300'}
      ${isActive ? 'text-slate-200' : 'text-slate-700'}
      `}
      onClick={onClick}
    >
      {element}
    </button>
  );
};
export default PaginationButton;
