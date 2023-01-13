import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div className="container my-0 mx-auto bg-slate-50 ">
      <header className="flex items-center py-4 px-5 mb-4 shadow-3xl">
        <nav className="flex justify-center gap-5 w-screen">
          <NavLink
            className="py-2 px-4 rounded text-mainColor font-bold hover:bg-orange-600 hover:text-white"
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="py-2 px-4 rounded text-mainColor font-bold hover:bg-orange-600 hover:text-white"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
