import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/API';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        const reviews = await getFilmReviews(movieId);
        setReviews(reviews);
        setIsLoading(false);
      } catch (e) {
        setIsLoading('Error in Reviews', e);
      }
    };

    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }
  return (
    <div>
      {!isLoading && reviews.length > 0 && (
        <ul className="flex flex-col gap-5">
          {reviews.map(({ id, author, content }) => (
            <li className="shadow-reviews p-5 rounded" key={id}>
              <p className="font-bold mb-2.5">Author: {author}</p>
              <p className=" text-justify">{content}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {reviews.length === 0 && !isLoading && (
        <div>Sorry.. there are still no reviews </div>
      )}
    </div>
  );
};

export default Reviews;
