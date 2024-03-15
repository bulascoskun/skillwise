import { toast } from 'react-toastify';
import customFetch from '../assets/customFetch';
import { Link, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { categoryString } from '../utils/categoryString';
import { FaCaretRight } from 'react-icons/fa6';
import { PlayButton } from '../components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const loader = async ({ params }: any) => {
  try {
    const { data: courseData } = await customFetch(`/courses/${params.id}`);
    const { data: isSubscribed } = await customFetch(`/subscribe/${params.id}`);

    return { courseData, isSubscribed, courseId: params.id };
  } catch (error: any) {
    toast.error('No course found');
    return error;
  }
};

const SingleCourse = () => {
  const navigate = useNavigate();

  const { courseData, isSubscribed, courseId } = useLoaderData() as {
    courseData: Course;
    isSubscribed: boolean;
    courseId: string;
  };
  const { _id, category, description, img, lecturer, summary, title } =
    courseData;

  const subscribe = async () => {
    try {
      await customFetch.post(`/subscribe/${courseId}`);
      return navigate(0);
    } catch (error) {
      toast.error('Already subscribed');
      return redirect('/courses');
    }
  };

  return (
    <section className="bg-amber-100 my-8 text-slate-800">
      <div className="flex items-start gap-20 w-[80%] container m-auto py-12">
        <div className="flex flex-col  w-[60%] gap-2">
          <h6 className="font-semibold text-amber-600 flex gap-2">
            <Link
              to={`/courses?category=${category}`}
              className="hover:text-amber-700 "
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
          <p className="text-md">{summary}</p>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="font-bold text-2xl">What You Will Learn</h2>
            <p className="text-md">{description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 shadow p-6 rounded-lg justify-between items-center bg-white">
          <div className="relative">
            <LazyLoadImage
              className="rounded-lg bg-gray-200"
              src={img}
              alt={title}
              width={'380px'}
              height={'285px'}
            />

            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-500 text-6xl">
              <PlayButton />
            </button>
          </div>
          {isSubscribed ? (
            <Link
              to={`/courses/${_id}/watch`}
              className="bg-amber-400 font-semibold px-2 py-1 my-auto w-full shadow rounded-lg 
          hover:shadow-none hover:bg-amber-500 transition relative flex justify-center"
            >
              Start Learning
              <FaCaretRight className="absolute right-[1rem] top-[50%] -translate-y-1/2" />
            </Link>
          ) : (
            <button
              onClick={subscribe}
              className="bg-amber-400 font-semibold px-2 py-1 my-auto w-full shadow rounded-lg 
          hover:shadow-none hover:bg-amber-500 transition"
            >
              Subscribe
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default SingleCourse;
