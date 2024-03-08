import { Hero, CourseCatalogue } from '../components';
import img from '../assets/hero-images/course-undraw.svg';

const Courses = () => {
  return (
    <>
      <Hero img={img} title="SkillWise Courses For Everyone" />
      <CourseCatalogue />
    </>
  );
};
export default Courses;
