import { useSubmit } from 'react-router-dom';
import SelectInput from './SelectInput';
import { ageCategory, bookSort } from '../assets/selectValues';

const BookSearch = ({ searchValues }: { searchValues: BookSearchValues }) => {
  const { category, search, sort } = searchValues;

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
    <form>
      <h3 className="font-bold text-3xl mb-4 text-slate-800">All Books</h3>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input
          className="text-slate-700 font-semibold px-5 py-2 border text-sm border-gray-300 rounded-[10rem] 
          focus:outline-none focus:border-amber-500 w-full"
          type="search"
          placeholder="Search Book Name, Author"
          defaultValue={search}
          name="search"
          onChange={debounce((form: any) => {
            submit(form);
          })}
        />
        <div className="flex gap-4">
          <SelectInput
            defaultValue={category}
            data={ageCategory}
            name="category"
            onChange={debounce((form: any) => {
              submit(form);
            })}
          />
          <SelectInput
            defaultValue={sort}
            data={bookSort}
            name="sort"
            onChange={debounce((form: any) => {
              submit(form);
            })}
          />
        </div>
      </div>
    </form>
  );
};
export default BookSearch;
