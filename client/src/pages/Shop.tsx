import { Hero, BookCatalogue } from '../components';
import img from '../assets/hero-images/books_undraw.svg';
import customFetch from '../assets/customFetch';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async ({ request }: { request: any }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch('/books', { params });
    return { data, searchValues: { ...params } };
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Shop = () => {
  const { data, searchValues }: any = useLoaderData();

  return (
    <>
      <Hero img={img} title="SkillWise Online Book Shop" />
      <BookCatalogue bookData={data} searchValues={searchValues} />
    </>
  );
};
export default Shop;
