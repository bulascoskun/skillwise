import { ExploreLink, Hero } from '../components';
import img from '../assets/hero-images/explore-undraw.svg';
import { exploreInfo } from '../assets/exploreInfo';

const Landing = () => {
  return (
    <>
      <Hero img={img} title="Start Exploring Skillwise" />

      <div className="border-amber-400 border-t my-16" />

      <section className="w-full mb-16 flex flex-col gap-12 ">
        {exploreInfo.map((item) => {
          return <ExploreLink key={item.title} {...item} />;
        })}
      </section>
    </>
  );
};
export default Landing;
