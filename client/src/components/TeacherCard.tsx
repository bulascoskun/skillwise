import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeacherCard = ({ img, name, bio, subjects }: Teacher) => {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl md:w-[90%] bg-white shadow m-auto">
      <LazyLoadImage
        className="mx-auto rounded-2xl object-cover aspect-[1] bg-gray-200"
        src={img}
        alt={name}
        width={'320px'}
        height={'320px'}
      />

      <div className="flex flex-col justify-between gap-8 p-8 md:px-8 text-slate-800">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-3xl">{name}</h3>
          <p
            className="font-semibold
        text-lg"
          >
            {bio}
          </p>
        </div>

        <div className="flex justify-start md:justify-center gap-4 flex-wrap">
          {subjects.map((subject, i) => {
            return (
              <button
                className="bg-amber-300 hover:bg-amber-600 text-slate-700 hover:text-white font-bold p-2 rounded-lg transition"
                key={i}
              >
                {subject}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TeacherCard;
