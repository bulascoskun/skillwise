const PaginationButton = ({ element }: { element: any }) => {
  return (
    <button
      className="bg-amber-400 hover:bg-amber-500 text-3xl size-12 rounded-lg shadow-sm text-white flex 
    justify-center items-center"
    >
      {element}
    </button>
  );
};
export default PaginationButton;
