import { NavLink } from 'react-router-dom';

import { FaList, FaRegCircleUser } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import Icon from './Icon';
import { links } from '../assets/links';

const Navbar = () => {
  return (
    <nav className=" py-4 px-24 shadow bg-white text-slate-900">
      <div className="container flex items-center justify-between m-auto">
        <div className="flex items-center">
          <NavLink to="/">
            <Icon />
          </NavLink>
          <ul className="ml-16 flex gap-x-8">
            {links.map(({ name, href }, i) => {
              return (
                <li key={name}>
                  <NavLink
                    className="font-semibold text-amber-600 text-lg"
                    to={href}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" h-full flex gap-x-4">
          <div className="flex items-center font-semibold">
            Cart(0)
            <IoCartOutline className="ml-2 size-6 text-amber-600" />
          </div>
          <div className="flex items-center font-semibold">
            My Orders
            <FaList className="ml-2 size-5 text-amber-600 " />
          </div>
          <div className="flex items-center font-semibold">
            My Account
            <FaRegCircleUser className="ml-2 size-5 text-amber-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
