import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeacherCard = ({ img, name, bio, subjects }: Teacher) => {
  return (
    <div className="flex rounded-2xl bg-white shadow w-[90%] m-auto">
      <LazyLoadImage
        className="size-80 rounded-tl-2xl rounded-bl-2xl object-cover aspect-[1] bg-gray-200"
        src={img}
        alt={name}
        width={'320px'}
        height={'320px'}
      />

      <div className="flex flex-col justify-between p-8 px-16 text-slate-800">
        <div>
          <h3 className="font-bold text-3xl mb-6">{name}</h3>
          <p
            className="font-semibold
        text-lg"
          >
            {bio}
          </p>
        </div>

        <div className="flex justify-center gap-4">
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
