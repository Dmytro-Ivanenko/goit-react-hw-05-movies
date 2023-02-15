import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './shared/components/Spinner/Spinner';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// components
const NavBar = lazy(() => import('./modules/NavBar/NavBar'));
const Home = lazy(() => import('./pages/Home/Home'));
// import Searchbar from './shared/components/Searchbar/Searchbar';
// import MovieList from './modules/MovieList/MovieList';

// api
// import { searchMovies } from './shared/services/movie-api';

const App = () => {
  // useEffect(() => {}, []);

  return (
    <Suspense fallback={<Spinner />}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
