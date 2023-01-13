import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getFilmById } from 'services/API';
import { Link } from 'react-router-dom';
import FilmCardDetails from 'components/FilmCardDetails/FilmCardDetails';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovieInfo = async () => {
      try {
        const movieInfo = await getFilmById(movieId);
        setMovie(movieInfo);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error in MovieDetails', error);
      }
    };
    getMovieInfo();
  }, [movieId]);

  if (movie.length === 0) {
    return;
  }

  return (
    <main>
      {!isLoading && (
        <section className="p-0 pb-[60px] ">
          <Link
            to={backLinkHref}
            className="flex justify-between transition-colors duration-300 items-center p-2.5 bg-yellow-400 mb-5 max-w-[110px] rounded font-bold text-mainColor text-center hover:bg-orange-600 hover:text-white"
          >
            Go Back
          </Link>
          <FilmCardDetails movie={movie} />
          <AdditionalInfo backLinkHref={backLinkHref} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      )}
      {isLoading && <Loader />}
    </main>
  );
};

export default MovieDetails;
