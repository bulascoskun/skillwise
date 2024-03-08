import { FaGraduationCap } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Icon = () => {
  return (
    <NavLink to="/">
      <div className=" flex items-center font-bold">
        <FaGraduationCap className="size-10 mr-2" />
        <span className="flex items-center text-2xl">SkillWise</span>
      </div>
    </NavLink>
  );
};
export default Icon;

// className="flex justify-center items-center"
