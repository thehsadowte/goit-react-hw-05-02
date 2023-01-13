import axios from 'axios';

const API_KEY = 'eb6a90efbcc57ff077fbac6714044aa1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getFilmById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    const movieInfo = response.data;
    return movieInfo;
  } catch (error) {
    console.log('Error in getting film by id', error);
  }
};

export const getFilmByKeyWord = async movie => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${movie}`
    );
    const searchMovie = response.data.results;
    return searchMovie;
  } catch (error) {
    console.log('Error in getting film by keyword', error);
  }
};

export const getFilmCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const cast = response.data.cast;
    return cast;
  } catch (error) {
    console.log('Error in getFilmCast', error);
  }
};

export const getFilmReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    const reviews = response.data.results;
    return reviews;
  } catch (error) {
    console.log('Error in getting film reviews', error);
  }
};

export function getDate(date) {
  if (date) {
    const year = date.split('-')[0];
    return year;
  }
}

export function getPosterFilm(posterPath) {
  if (posterPath) return `${BASE_IMG_URL}/${posterPath}`;
  return 'https://www.jsconsulting.kz/assets/img/noImg.jpg';
}

export function getGenres(genres) {
  if (!genres) {
    return;
  }
  const genresName = genres.map(genre => genre.name);
  return genresName.join(', ');
}

export function sliceVoteAverage(voteAverage) {
  const sliceVoteAverage = parseFloat(voteAverage.toFixed(1));
  return sliceVoteAverage;
}

export function getPercentageValue(voteAverage) {
  if (!voteAverage) {
    return;
  }
  const sliceVote = sliceVoteAverage(voteAverage);
  const percentValue = (sliceVote / 10) * 100;
  const percent = parseFloat(percentValue.toFixed(1));
  return `${percent}%`;
}
