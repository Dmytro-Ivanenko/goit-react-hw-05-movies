import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// components
import NavBar from './modules/NavBar';
// import Searchbar from './shared/components/Searchbar/Searchbar';
import MovieList from './modules/MovieList/MovieList';

// api
// import { searchMovies } from './shared/services/movie-api';

const App = () => {
  // useEffect(() => {}, []);

  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<Home /> } /> */}
        {/* <Route path='/movies' element={<Movies /> }></Route> */}

        {/* <Route path='/:movieId' element={ }></Route>
        <Route path='/:movieId/cast' element={ }></Route>
        <Route path='/:movieId/reviews' element={ }></Route> */}
      </Routes>
    </>
  );
};

export default App;
