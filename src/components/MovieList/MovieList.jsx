import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';

import { getDate, getPosterFilm, sliceVoteAverage } from '../../services/API';
const MovieList = ({ movies = [] }) => {
  const location = useLocation();

  if (!movies) {
    return;
  }

  return (
    <ul className="mx-auto mb-10 grid justify-center auto-rows-auto grid-cols-3 gap-x-5 gap-y-8 max-w-[1200px]">
      {movies.map(({ id, poster_path, title, vote_average, release_date }) => (
        <div key={id} className="w-[385px] cursor-pointer">
          <Link
            className="block text-black scale-100 transition-transform duration-300 hover:transition-transform hover:duration-300 hover:scale-110 hover:duration-300 focus:transition-transform focus:scale-110 "
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              src={getPosterFilm(poster_path)}
              alt={title}
              className="rounded object-cover w-[385px] h-[574px]"
            />
            <div className=" flex flex-col items-start pt-3">
              <p className=" text-xl font-bold uppercase mb-1">{title}</p>
              <div className="flex items-center">
                <p>
                  Vote: {sliceVoteAverage(vote_average)} |{' '}
                  {getDate(release_date)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
};
