import { Outlet, redirect } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import customFetch from '../assets/customFetch';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/user');
    return data;
  } catch (error) {
    return redirect('/welcome');
  }
};

const Layout = () => {
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
