const ShowEmpty = ({ string }: { string: string }) => {
  return (
    <div className="my-8 mx-auto font-semibold text-amber-700 hover:text-amber-600 transition flex items-center justify-center">
      {string}
    </div>
  );
};
export default ShowEmpty;
