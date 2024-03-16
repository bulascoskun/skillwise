import { useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { ClipLoader } from 'react-spinners';

const PlayButton = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-500 text-6xl">
      {isVideoLoading ? (
        <ClipLoader
          color={'#F59E0B'}
          size={55}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <FaPlay
          onClick={() => {
            setIsVideoLoading(true);
          }}
        />
      )}
    </div>
  );
};
export default PlayButton;
