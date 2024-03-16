import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
  padding: 1rem;

  width: 275px;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CourseCard = ({ _id, img, title, summary, lecturer }: Course) => {
  return (
    <Wrapper>
      <LazyLoadImage
        src={img}
        alt={title}
        width={'245px'}
        height={'169px'}
        className="max-h-[100%] h-[169px] min-h-[40%] bg-gray-200 rounded-lg"
      />

      <div className="text-slate-800 flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">{title}</h2>

          <Link
            to={`/courses?search=${lecturer}`}
            className="font-semibold hover:text-amber-700 text-amber-600 text-sm transition"
          >
            {lecturer}
          </Link>
          <p className="text-sm">{summary}</p>
        </div>
        <Link to={`/courses/${_id}`}>
          <button
            className="course-card-button border bg-white-500 hover:bg-amber-600 hover:text-white text-amber-600 
          font-semibold py-1 px-4 rounded transition w-full border-amber-600"
          >
            Course Details
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
export default CourseCard;
