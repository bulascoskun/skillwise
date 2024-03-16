import { FaStar } from 'react-icons/fa6';

const Stars = ({ stars }: { stars: number }) => {
  return (
    <span className="flex">
      {Array.from(Array(stars || 3).keys()).map((num) => {
        return <FaStar key={num} className="text-amber-400" />;
      })}
    </span>
  );
};
export default Stars;
