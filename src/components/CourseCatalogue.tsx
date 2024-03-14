import CourseCard from './CourseCard';
import CourseSearch from './CourseSearch';
import PaginationButtonContainer from './PaginationButtonContainer';

const CourseCatalogue = ({
  data,
  searchValues,
}: {
  data: CourseCatalogueData;
  searchValues: CourseSearchValues;
}) => {
  const { courses, currentPage, numOfPages } = data;

  return (
    <section className="container m-auto">
      <div className="mt-16">
        <h3 className="font-bold text-3xl mb-4 text-center text-slate-800">
          Find Your Course
        </h3>

        <CourseSearch searchValues={searchValues} />

        <div className="grid grid-cols-4 gap-8 justify-items-center">
          {courses.map((course: Course) => {
            return <CourseCard key={course._id} {...course} />;
          })}
        </div>

        {numOfPages > 1 && (
          <PaginationButtonContainer
            currentPage={currentPage}
            numOfPages={numOfPages}
          />
        )}
      </div>
    </section>
  );
};
export default CourseCatalogue;
