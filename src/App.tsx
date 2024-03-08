import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  Error,
  Layout,
  Landing,
  Shop,
  Courses,
  Teachers,
  JoinUs,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'courses',
        element: <Courses />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
