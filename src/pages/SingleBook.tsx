import { toast } from 'react-toastify';
import customFetch from '../assets/customFetch';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import Stars from '../components/Stars';
import { categoryString } from '../utils/categoryString';
import { AddToCartButton } from '../components';

export const loader = async ({ params }: any) => {
  try {
    const { data } = await customFetch(`/books/${params.id}`);
    return data;
  } catch (error: any) {
    toast.error('No book found');
    return redirect('/shop');
  }
};

const SingleBook = () => {
  const { author, category, img, name, price, sold, stars } =
    useLoaderData() as Book;
  const navigate = useNavigate();

  return (
    <section className="container m-auto my-16">
      <div className="flex p-8 gap-8 rounded-lg bg-white shadow text-slate-800 max-w-[900px] m-auto">
        <img src={img} alt={name} className="rounded-lg max-h-[400px]" />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl">{name}</h2>
          <h3 className="font-semibold text-2xl">{author}</h3>
          <div className="flex items-center gap-4">
            <h4
              className="font-semibold text-amber-700 text-lg cursor-pointer"
              onClick={() => {
                navigate(`/shop?category=${category}`);
              }}
            >
              {categoryString(category)}
            </h4>
            <div className="flex items-center gap-1">
              <Stars stars={stars} />
              <span className="text-xs font-semibold">({sold})</span>
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vero
            tempore earum magni harum aperiam, dolorum iste ex impedit totam
            autem delectus voluptates eaque. Veniam eligendi quod tenetur labore
            quaerat dolorem est in aperiam tempora. Soluta reiciendis, excepturi
            ex labore harum cumque molestiae earum ad voluptate sequi eius neque
            eaque possimus quae iste, illo veritatis. Vel doloribus, molestias
            doloremque laborum numquam minima. Eveniet adipisci atque eius?
            Deserunt commodi corrupti distinctio itaque suscipit. Corporis velit
            ratione distinctio. Deserunt eveniet eaque quaerat quo repellat, et,
            voluptates quae porro illo facilis vero dicta nam cum laboriosam hic
            consequatur laudantium assumenda nisi. Consequatur, recusandae!
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <span className="font-bold text-lg text-amber-600">
              ${price / 100}
            </span>
            <AddToCartButton
              author={author}
              img={img}
              name={name}
              price={price}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleBook;
