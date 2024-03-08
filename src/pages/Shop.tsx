import { Hero, BookCatalogue } from '../components';
import img from '../assets/hero-images/books_undraw.svg';

const Shop = () => {
  return (
    <>
      <Hero img={img} title="SkillWise Online Book Shop" />
      <BookCatalogue />
    </>
  );
};
export default Shop;
