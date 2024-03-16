import { useEffect, useState } from 'react';
import { FaList, FaRegCircleUser } from 'react-icons/fa6';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdExit } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import customFetch from '../assets/customFetch';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { clearCart } from '../state/shoppingCart/shoppingCartSlice';

const NavbarMyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    try {
      await customFetch('/auth/logout');
      navigate('/welcome');
      dispatch(clearCart());
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="font-semibold bg-amber-600 relative rounded text-slate-100">
      <button
        className="flex items-center cursor-pointer py-1 px-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        My Account
        {isOpen ? (
          <IoMdArrowDropup className="ml-2 size-5 " />
        ) : (
          <IoMdArrowDropdown className="ml-2 size-5 " />
        )}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col bg-amber-600 rounded py-1 px-2 top-[125%] w-[110%] gap-2 z-[999] shadow">
          <Link
            to="/profile"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex items-center justify-between"
          >
            Profile
            <div className="flex w-[33px] justify-center items-center">
              <FaRegCircleUser className="ml-2 text-xl" />
            </div>
          </Link>
          <Link
            to="/my-orders"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex items-center justify-between"
          >
            My Orders
            <div className="flex w-[33px] justify-center items-center">
              <FaList className="ml-2 text-xl" />
            </div>
          </Link>
          <Link
            to="/my-courses"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex items-center justify-between"
          >
            My Courses
            <div className="flex w-[33px] justify-center items-center">
              <MdOutlinePlayLesson className="ml-2 text-xl" />
            </div>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center justify-between"
          >
            Logout
            <IoMdExit className="ml-2 size-[1.5rem] " />
          </button>
        </div>
      )}
    </div>
  );
};
export default NavbarMyAccount;
