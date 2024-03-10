import BookCard from './BookCard';

const LeftDisplay = ({ data, title }: { data: BookInfo[]; title: string }) => {
  return (
    <>
      <h3 className="font-bold text-3xl mb-4">{title}</h3>
      <div className="flex flex-col gap-8 mb-8">
        {data.map((book) => {
          return <BookCard key={book._id} {...book} />;
        })}
      </div>
    </>
  );
};
export default LeftDisplay;
