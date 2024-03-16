import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Error,
  Layout,
  Landing,
  Shop,
  Courses,
  Teachers,
  JoinUs,
  Login,
  Register,
  Profile,
  SingleBook,
  SingleCourse,
  MyCourses,
  Watch,
  Welcome,
  MyCart,
  MyOrders,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as profileAction } from './pages/Profile';

import { loader as layoutLoader } from './pages/Layout';
import { loader as shopLoader } from './pages/Shop';
import { loader as coursesLoader } from './pages/Courses';
import { loader as singleBookLoader } from './pages/SingleBook';
import { loader as singleCourseLoader } from './pages/SingleCourse';
import { loader as myCoursesLoader } from './pages/MyCourses';
import { loader as myOrdersLoader } from './pages/MyOrders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: layoutLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'shop',
        element: <Shop />,
        loader: shopLoader,
      },
      {
        path: 'shop/:id',
        element: <SingleBook />,
        loader: singleBookLoader,
      },
      {
        path: 'courses',
        element: <Courses />,
        loader: coursesLoader,
      },
      {
        path: 'courses/:id',
        element: <SingleCourse />,
        loader: singleCourseLoader,
      },
      {
        path: 'courses/:id/watch',
        element: <Watch />,
        loader: singleCourseLoader,
      },
      {
        path: 'teachers',
        element: <Teachers />,
      },
      {
        path: 'join-us',
        element: <JoinUs />,
      },
      {
        path: 'profile',
        element: <Profile />,
        loader: layoutLoader,
        action: profileAction,
      },
      {
        path: 'my-courses',
        element: <MyCourses />,
        loader: myCoursesLoader,
      },
      {
        path: 'my-cart',
        element: <MyCart />,
      },
      {
        path: 'my-orders',
        element: <MyOrders />,
        loader: myOrdersLoader,
      },
    ],
  },
  {
    path: '/welcome',
    element: <Welcome />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
