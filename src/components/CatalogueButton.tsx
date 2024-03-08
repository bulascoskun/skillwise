const CatalogueButton = ({ title }: { title: string }) => {
  return (
    <button className="bg-amber-400 text-slate-700 hover:bg-amber-300 w-[25%] py-2 rounded-[10rem] font-semibold transition">
      {title}
    </button>
  );
};
export default CatalogueButton;
