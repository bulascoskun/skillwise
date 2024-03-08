import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
  padding: 1rem;

  width: 250px;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: 40%;
    min-height: 40%;
    background-color: #060624;
    border-radius: 1rem;
  }

  .course-card-button {
    margin: 0 auto;
    border: 1px solid rgb(180 83 9);
  }
`;

const CourseCard = ({
  img,
  title,
  summary,
}: {
  img: string;
  title: string;
  summary: string;
}) => {
  return (
    <Wrapper>
      <img src={img} alt={title} />

      <div className="text-slate-800 flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-col  gap-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm">{summary}</p>
        </div>
        <button className="course-card-button border bg-white-500 hover:bg-amber-600 hover:text-white text-amber-700 font-semibold py-1 px-4 rounded transition">
          Course Details
        </button>
      </div>
    </Wrapper>
  );
};
export default CourseCard;
