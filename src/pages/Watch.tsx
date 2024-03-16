import { Link, useLoaderData } from 'react-router-dom';
import { PlayButton } from '../components';
import { categoryString } from '../utils/categoryString';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Watch = () => {
  const { courseData } = useLoaderData() as { courseData: Course };
  const { img, title, category, lecturer, description } = courseData;

  return (
    <section className="bg-amber-100 my-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around">
        <div className="flex justify-center items-center  relative">
          <LazyLoadImage
            className=" bg-gray-200"
            src={img}
            alt={title}
            width={'700px'}
            height={'100%'}
          />
          <PlayButton />
        </div>
        <div className="bg-white text-slate-800 p-8 w-full xl:w-[40%] flex flex-col gap-4">
          <h6 className="font-semibold text-amber-600 flex gap-2">
            <Link
              to={`/courses?category=${category}`}
              className="hover:text-amber-700"
            >
              {categoryString(category)}
            </Link>
            <span>|</span>
            <Link
              to={`/courses?search=${lecturer}`}
              className="hover:text-amber-700"
            >
              {lecturer}
            </Link>
          </h6>
          <h1 className="font-bold text-4xl mb-2">{title}</h1>

          <p>{description}</p>
          <h5></h5>
        </div>
      </div>
    </section>
  );
};
export default Watch;
