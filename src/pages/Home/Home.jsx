import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const API_KEY = 'eb6a90efbcc57ff077fbac6714044aa1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTrendMovies = async () => {
      try {
        const response = await axios.get(
          `/trending/movie/day?api_key=${API_KEY}`
        );
        const moviesTrend = response.data.results;
        setMovies(moviesTrend);
        setIsLoading(false);
        return moviesTrend;
      } catch (error) {
        setIsLoading(false);
        console.log('something went wrong', error);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <main>
      <section>
        {!isLoading && movies.length > 0 && (
          <>
            <h1 className="text-center mb-5 text-mainColor font-bold text-xl ">
              Trending movies today
            </h1>
            {movies.length > 0 && !isLoading && <MovieList movies={movies} />}
          </>
        )}
      </section>
      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
