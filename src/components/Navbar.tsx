import { NavLink } from 'react-router-dom';

import { FaGraduationCap, FaRegCircleUser } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import Icon from './Icon';

const Navbar = () => {
  return (
    <nav className=" py-4 px-24 shadow bg-white ">
      <div className="container flex items-center justify-between m-auto">
        <div className="flex items-center">
          <Icon />
          <ul className=" flex gap-x-4">
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/teachers">Teachers</NavLink>
            </li>
            <li>
              <NavLink to="/join-us">Join Us</NavLink>
            </li>
          </ul>
        </div>

        <div className=" h-full flex gap-x-4">
          <div className="flex items-center">
            Cart(0)
            <IoCartOutline className="ml-2 size-6 text-amber-600" />
          </div>
          <div className="flex items-center">
            My Account
            <FaRegCircleUser className="ml-2 size-5 text-amber-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
