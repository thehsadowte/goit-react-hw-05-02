import Loader from 'components/Loader/Loader';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPosterFilm, getFilmCast } from 'services/API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      try {
        const cast = await getFilmCast(movieId);
        setCast(cast);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log('Error in the Cast ', e);
      }
    };
    getCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      {!isLoading && cast.length > 0 && (
        <ul className="mx-auto mb-10 grid justify-center auto-rows-auto grid-cols-3 gap-y-8 gap-x-[22px] max-w-[1200px]">
          {cast.map(({ cast_id, name, character, profile_path }) => (
            <li className="flex flex-col items-center gap-2" key={cast_id}>
              <img
                src={getPosterFilm(profile_path)}
                alt={name}
                className="rounded object-cover object-top w-[385px] h-[470px]"
              />
              <p className="text-lg font-bold">Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {cast.length === 0 && !isLoading && <div>Can't find the actor</div>}
    </div>
  );
};

export default Cast;
