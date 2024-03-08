import { Outlet } from 'react-router-dom';
import { Navbar, SubscribeEmail, Footer } from '../components';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SubscribeEmail />
      <Footer />
    </>
  );
};
export default Layout;
