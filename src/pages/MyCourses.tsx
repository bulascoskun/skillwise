import { redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../assets/customFetch';
import { MyCoursesList } from '../components';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/courses/mycourses');
    const myCourses = data;
    return myCourses;
  } catch (error) {
    toast.error('There was an error');
    return redirect('/');
  }
};

const MyCourses = () => {
  const myCourses = useLoaderData() as MyCourse;

  return (
    <section
      className="container m-auto p-8 text-slate-800 rounded-lg shadow my-16
        bg-gradient-to-r from-amber-300 to-yellow-200"
    >
      <h2 className="font-bold text-3xl mb-8">My Courses</h2>
      <MyCoursesList myCourses={myCourses} />
    </section>
  );
};
export default MyCourses;
