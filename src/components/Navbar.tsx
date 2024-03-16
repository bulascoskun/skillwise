import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import Icon from './Icon';
import { links } from '../assets/links';
import NavbarMyAccount from './NavbarMyAccount';
import { useSelector } from 'react-redux';
import { selectTotalItemCount } from '../state/shoppingCart/shoppingCartSlice';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';
import { BurgerMenu } from '.';

const Navbar = () => {
  const totalItemCount = useSelector(selectTotalItemCount);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className="py-4 px-6 lg:px-24 shadow bg-white text-slate-900">
      <div className="container flex items-center justify-between m-auto">
        <div className="flex items-center">
          <Link to="/">
            <Icon />
          </Link>
          <ul className="hidden lg:flex ml-16 gap-x-8">
            {links.map(({ name, href }) => {
              return (
                <li key={name}>
                  <NavLink
                    className="font-semibold text-amber-600 hover:text-amber-500 text-lg transition"
                    to={href}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <FaBars className="lg:hidden text-3xl" onClick={handleBurger} />
        <BurgerMenu isBurgerOpen={isBurgerOpen} handleBurger={handleBurger} />

        <div className="hidden lg:flex h-full gap-x-4 text-slate-800">
          <Link
            to="/my-cart"
            className="flex items-center font-semibold hover:text-amber-600 transition"
          >
            My Cart
            <span className="font-bold ml-1 text-amber-700">
              ({totalItemCount})
            </span>
            <IoCartOutline className="size-6 text-amber-600" />
          </Link>
          <NavbarMyAccount />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
