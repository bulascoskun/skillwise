import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ExploreLink = ({ title, info, href }: ExploreLink) => {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-yellow-200">
      <div className="py-4  text-slate-800 m-auto container flex items-center">
        <h1 className="text-5xl font-bold w-[20%]">{title}</h1>

        <p className="font-semibold m-auto w-[60%]">{info}</p>

        <NavLink to={href} className="ml-auto">
          <MdKeyboardArrowRight className="size-40 hover:text-amber-600 transition" />
        </NavLink>
      </div>
    </div>
  );
};
export default ExploreLink;
