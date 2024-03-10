import { Hero, CourseCatalogue, SubscribeEmail } from '../components';
import img from '../assets/hero-images/course-undraw.svg';
import customFetch from '../assets/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/courses');
    return data;
  } catch (error) {
    return redirect('/login');
  }
};

const Courses = () => {
  const { courses }: any = useLoaderData();

  return (
    <>
      <Hero img={img} title="SkillWise Courses For Everyone" />
      <CourseCatalogue courses={courses} />
      <SubscribeEmail />
    </>
  );
};
export default Courses;
