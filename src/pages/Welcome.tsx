import { Link } from 'react-router-dom';
import img from '../assets/hero-images/explore-undraw.svg';
import { FaGraduationCap } from 'react-icons/fa6';

const Welcome = () => {
  return (
    <main
      className=" w-dvw h-dvh flex
    bg-gradient-to-r from-amber-800 to-yellow-700"
    >
      <section className="container w-[75%] mx-auto text-white flex justify-center items-center gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-6xl flex items-center">
            <FaGraduationCap className="mb-[-4px] mr-2 hover:text-amber-400 transition" />
            Skill
            <span className="text-amber-400">Wise</span>
            .com
          </h1>
          <p className="text-lg">
            In the fast-paced world of today, learning and acquiring new skills
            have become indispensable for personal and professional growth.
            Introducing SkillWise.com, your premier destination for online
            learning and literary exploration. SkillWise bridges the gap between
            aspiration and achievement, offering a diverse array of online
            courses and a vast library of digital books, empowering you to
            embark on a journey of self-improvement from the comfort of your own
            space.
          </p>
          <div className="flex gap-4">
            <Link
              className="font-semibold p-2 px-4 bg-amber-500 hover:bg-amber-400 text-slate-800 transition rounded"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="font-semibold p-2 px-4 bg-amber-500 hover:bg-amber-400 text-slate-800 transition rounded"
              to="/login"
            >
              Login / Test App
            </Link>
          </div>
        </div>
        <img src={img} alt="SkillWise.com" className="w-96" />
      </section>
    </main>
  );
};
export default Welcome;
