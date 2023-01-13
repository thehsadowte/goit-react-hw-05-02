import {
  getPosterFilm,
  getGenres,
  getDate,
  getPercentageValue,
} from 'services/API';
import PropTypes from 'prop-types';

import React from 'react';

const FilmCardDetails = ({ movie }) => {
  const { title, poster_path, release_date, overview, genres, vote_average } =
    movie;

  return (
    <div className="flex mb-5">
      <img
        src={getPosterFilm(poster_path)}
        alt={title}
        className="rounded object-cover w-[385px] h-[574px]"
      />
      <div className="ml-5">
        <h1 className="text-xl font-bold uppercase mb-2.5 ">
          {title} ({getDate(release_date)})
        </h1>
        <p className="text-base font-bold mb-2.5">
          User Score:{' '}
          <span className="text-base font-normal">
            {vote_average && getPercentageValue(vote_average)}
          </span>
        </p>
        <p className="text-base font-bold mb-2.5">Overview</p>
        <p className="text-base mb-2.5 font-normal text-justify w-[450px]">
          {overview}
        </p>
        <p className="text-base font-bold mb-2.5">
          Genres:
          <span className="text-base font-normal">{getGenres(genres)}</span>
        </p>
      </div>
    </div>
  );
};

export default FilmCardDetails;

FilmCardDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    vote_average: PropTypes.number,
  }),
};
