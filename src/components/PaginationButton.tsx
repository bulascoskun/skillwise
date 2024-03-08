const PaginationButton = ({ element }: { element: any }) => {
  return (
    <button
      className="bg-amber-400 text-slate-700 hover:bg-amber-300 text-2xl size-12 rounded-lg shadow-sm  flex 
    justify-center items-center"
    >
      {element}
    </button>
  );
};
export default PaginationButton;
