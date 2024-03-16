import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ExploreLink = ({ title, info, href }: ExploreLink) => {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-yellow-200">
      <div className="py-4 px-4 lg:px-0 text-slate-800 m-auto container flex items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold w-[20%] px-8">
          {title}
        </h1>

        <p className="font-semibold m-auto w-[60%] hidden lg:block">{info}</p>

        <NavLink to={href} className="ml-auto">
          <MdKeyboardArrowRight className="size-20 lg:size-40 hover:text-amber-600 transition" />
        </NavLink>
      </div>
    </div>
  );
};
export default ExploreLink;
