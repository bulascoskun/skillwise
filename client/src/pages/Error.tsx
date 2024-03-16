import { NavLink } from 'react-router-dom';
import img from '../assets/hero-images/pagenotfound.svg';

const Error = () => {
  return (
    <section className="bg-gradient-to-b from-amber-600 to-yellow-200 h-dvh flex flex-col justify-center items-center gap-8">
      <img src={img} alt="404" className="h-[40%]" />
      <div className="flex flex-col justify-center items-center gap-4 text-slate-700">
        <h3 className="text-5xl font-bold">Oops!</h3>
        <p className="font-semibold">
          We can't seem to find the page you're looking for
        </p>
        <NavLink
          className="font-bold text-2xl text-amber-800 hover:text-amber-700 transition"
          to="/"
        >
          Home
        </NavLink>
      </div>
    </section>
  );
};
export default Error;
