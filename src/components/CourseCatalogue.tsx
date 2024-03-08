import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CatalogueButton from './CatalogueButton';
import PaginationButton from './PaginationButton';
import CourseCard from './CourseCard';
import { courses } from '../assets/courses';

const CourseCatalogue = () => {
  return (
    <section className="container m-auto">
      <div className="mt-16">
        {/* BUTTONS */}
        <div className="flex gap-x-4 justify-between items-start mb-4">
          <CatalogueButton title="All Courses" />
          <CatalogueButton title="For Kids" />
          <CatalogueButton title="High School" />
          <CatalogueButton title="College" />
        </div>

        {/* SEARCH */}
        <div className="flex items-center justify-center mb-4">
          <input
            className="px-8 py-2 border border-gray-300 rounded-[10rem] focus:outline-none focus:border-amber-500 w-[50%]"
            type="search"
            placeholder="Search Book Name, Author"
          />
        </div>

        {/* COURSES */}
        <div className="flex gap-8">
          {courses.map((course) => {
            return <CourseCard key={course.title} {...course} />;
          })}
        </div>

        {/* PAGINATION */}
        <div className="my-8 flex justify-center gap-2">
          <PaginationButton element={<MdKeyboardArrowLeft />} />
          <PaginationButton element="1" />
          <PaginationButton element={<MdKeyboardArrowRight />} />
        </div>
      </div>
    </section>
  );
};
export default CourseCatalogue;
