import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from './Layout.styled';
import css from './Layout.module.scss';

function Layout() {
  return (
    <div>
      <header className={css}>
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default Layout;
