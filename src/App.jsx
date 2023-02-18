import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './shared/components/Spinner/Spinner';

// components
const NavBar = lazy(() => import('./modules/NavBar/NavBar'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('./modules/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
