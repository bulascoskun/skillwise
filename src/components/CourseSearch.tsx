import { useSubmit } from 'react-router-dom';
import SelectInput from './SelectInput';
import { ageCategory } from '../assets/selectValues';

const CourseSearch = ({
  searchValues,
}: {
  searchValues: CourseSearchValues;
}) => {
  const { category, search } = searchValues;

  const submit = useSubmit();
  const debounce = (onChange: any) => {
    let timeout: any;
    return (e: any) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 500);
    };
  };

  return (
    <form className="mb-4 grid grid-cols-2 gap-4 w-8/12 m-auto">
      <input
        className="text-slate-700 font-semibold px-5 py-2 border text-sm border-gray-300 rounded-[10rem] 
        focus:outline-none focus:border-amber-500 w-full"
        placeholder="Search Course Name, Instructor"
        type="search"
        defaultValue={search}
        name="search"
        onChange={debounce((form: any) => {
          submit(form);
        })}
      />
      <SelectInput
        defaultValue={category}
        data={ageCategory}
        name="category"
        onChange={debounce((form: any) => {
          submit(form);
        })}
      />
    </form>
  );
};
export default CourseSearch;
