import { Outlet, redirect } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import customFetch from '../assets/customFetch';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/user');
    return data;
  } catch (error) {
    return redirect('/login');
  }
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
