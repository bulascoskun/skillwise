import { Form, useSubmit } from 'react-router-dom';
import CatalogueButton from './CatalogueButton';

const BookSearch = () => {
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  return (
    <Form method="post">
      <div className="flex gap-x-4 justify-between items-start mb-4">
        <CatalogueButton title="All Books" />
        <CatalogueButton title="For Kids" />
        <CatalogueButton title="High School" />
        <CatalogueButton title="College" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <input
          className="px-8 py-2 border border-gray-300 rounded-[10rem] focus:outline-none focus:border-amber-500 w-[67%]"
          type="search"
          placeholder="Search Book Name, Author"
        />
        <select className="ml-4 px-8 py-2 border border-gray-300 rounded-[10rem] focus:outline-none focus:border-amber-500 w-[32%]">
          <option value="all">All</option>
          <option value="latest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Popular</option>
        </select>
      </div>

      <button type="submit" className="bg-slate-400">
        SUBMIT
      </button>
    </Form>
  );
};
export default BookSearch;
