import { Hero, BookCatalogue } from '../components';
import img from '../assets/hero-images/books_undraw.svg';
import customFetch from '../assets/customFetch';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/books');
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Shop = () => {
  const bookData = useLoaderData();
  return (
    <>
      <Hero img={img} title="SkillWise Online Book Shop" />
      <BookCatalogue bookData={bookData} />
    </>
  );
};
export default Shop;
