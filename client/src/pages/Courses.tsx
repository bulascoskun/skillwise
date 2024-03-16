import { Hero, CourseCatalogue, SubscribeEmail } from '../components';
import img from '../assets/hero-images/course-undraw.svg';
import customFetch from '../assets/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async ({ request }: { request: any }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get('/courses', { params });
    return { data, searchValues: { ...params } };
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return redirect('/login');
  }
};

const Courses = () => {
  const courseLoaderData: any = useLoaderData();

  return (
    <>
      <Hero img={img} title="SkillWise Courses For Everyone" />
      <CourseCatalogue {...courseLoaderData} />
      <SubscribeEmail />
    </>
  );
};
export default Courses;
