import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CatalogueButton from './CatalogueButton';
import PaginationButton from './PaginationButton';
import CourseCard from './CourseCard';

const CourseCatalogue = ({ courses }: { courses: Course[] }) => {
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
            placeholder="Search Course Name, Instructor"
          />
        </div>

        {/* COURSES */}
        <div className="grid grid-cols-4 gap-16 justify-items-center">
          {courses.map((course) => {
            return <CourseCard key={course._id} {...course} />;
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
