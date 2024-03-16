import { MdOutlinePlayLesson } from 'react-icons/md';
import { FaList, FaRegCircleUser } from 'react-icons/fa6';

export const myAccount = [
  {
    name: 'Profile',
    href: '/profile',
    icon: <FaRegCircleUser />,
  },
  {
    name: 'My Orders',
    href: '/my-orders',
    icon: <FaList />,
  },
  {
    name: 'My Courses',
    href: '/my-courses',
    icon: <MdOutlinePlayLesson />,
  },
];
