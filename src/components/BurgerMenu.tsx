import { NavLink } from 'react-router-dom';
import { links } from '../assets/links';
import { myAccount } from '../assets/myAccount';
import { FaTimes } from 'react-icons/fa';

const BurgerMenu = ({
  isBurgerOpen,
  handleBurger,
}: {
  isBurgerOpen: boolean;
  handleBurger: () => void;
}) => {
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 right-[20%] bottom-0 shadow-lg bg-white py-8 p-4 flex flex-col gap-4
      transition-transform duration-300 ${
        isBurgerOpen ? 'translate-x-0' : '-translate-x-full'
      }
    `}
    >
      <FaTimes
        className="text-amber-800 ml-auto text-3xl"
        onClick={handleBurger}
      />
      <div className="w-full h-[2px] bg-amber-600" />
      <ul className="flex flex-col p-4 gap-8 relative">
        {links.map(({ name, href }) => {
          return (
            <li key={name}>
              <NavLink
                onClick={handleBurger}
                className="font-semibold text-amber-600 hover:text-amber-500 text-3xl transition"
                to={href}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="w-full h-[2px] bg-amber-600" />
      <ul className="flex flex-col p-4 gap-8">
        {myAccount.map(({ name, href, icon }) => {
          return (
            <li key={name}>
              <NavLink
                onClick={handleBurger}
                className="font-semibold text-amber-700 hover:text-amber-600 text-3xl transition flex justify-between items-center"
                to={href}
              >
                <span>{name}</span>
                <span>{icon}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BurgerMenu;
