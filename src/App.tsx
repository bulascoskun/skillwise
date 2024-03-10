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
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

import { loader as layoutLoader } from './pages/Layout';
import { loader as shopLoader } from './pages/Shop';
import { loader as coursesLoader } from './pages/Courses';

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
        path: 'courses',
        element: <Courses />,
        loader: coursesLoader,
      },
      {
        path: 'teachers',
        element: <Teachers />,
      },
      {
        path: 'join-us',
        element: <JoinUs />,
      },
    ],
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
