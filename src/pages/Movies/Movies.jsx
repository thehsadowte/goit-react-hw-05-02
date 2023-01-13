import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { getFilmByKeyWord } from 'services/API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  const updateQueryStr = query => {
    const searchMovie = query !== '' ? { query } : {};
    setSearchParams(searchMovie);
  };

  useEffect(() => {
    if (!movie) {
      return;
    }
    setIsLoading(true);
    const getMovie = async () => {
      try {
        const movieFound = await getFilmByKeyWord(movie);
        setMovies(movieFound);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log('Error in MovieSearch', e);
      }
    };
    getMovie();
  }, [movie]);
  return (
    <main>
      <section>
        <Search onUpdateQuery={updateQueryStr} value={movie} />
        {movies.length > 0 && !isLoading && <MovieList movies={movies} />}
        {isLoading && <Loader />}
        {!isLoading && movie && movie.length === 0 && (
          <div>Sorry we cannot find any movie</div>
        )}
      </section>
    </main>
  );
};

export default Movies;
