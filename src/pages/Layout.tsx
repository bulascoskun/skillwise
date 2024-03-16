import { Outlet, redirect, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import customFetch from '../assets/customFetch';
import { useEffect } from 'react';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/user');
    return data;
  } catch (error) {
    return redirect('/welcome');
  }
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="flex flex-col h-dvh">
      <section className="flex-1">
        <Navbar />
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
export default Layout;
