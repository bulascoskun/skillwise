import { Link } from 'react-router-dom';
import moment from 'moment';

const MyCoursesList = ({ myCourses }: { myCourses: MyCourse }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text font-semibold text-surface text-slate-800 dark:text-white">
              <thead className="border-b border-amber-600 dark:border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Subscription Date
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {myCourses.map((myCourse, i) => {
                  const { _id, createdAt, course_info } = myCourse;

                  return (
                    <tr
                      key={_id}
                      className="border-b border-amber-600 dark:border-white/10"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {course_info.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-amber-600 hover:text-amber-500 transition">
                        <Link to={`/courses/${course_info._id}`}>
                          Start Learning
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyCoursesList;
