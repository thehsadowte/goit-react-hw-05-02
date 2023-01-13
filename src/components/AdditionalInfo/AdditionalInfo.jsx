import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdditionalInfo = backLinkHref => {
  return (
    <div className="mb-5 mx-auto mt-0 text-center ">
      <h2 className="mb-2.5 font-mono font-bold text-lg ">
        Additional Information
      </h2>
      <ul className="flex justify-center gap-[100px]">
        <li>
          <Link
            to="cast"
            state={{ from: backLinkHref }}
            className="px-6 py-2 no-underline rounded text-mainColor font-bold block min-w-[100px] bg-yellow-400 transition-colors duration-300 active:text-white active:bg-orange-600 hover:text-white hover:bg-orange-600"
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            state={{ from: backLinkHref }}
            className="px-6 py-2 no-underline text-mainColor rounded font-bold block min-w-[100px] bg-yellow-400 transition-colors duration-300 active:text-white active:bg-orange-600 hover:text-white hover:bg-orange-600"
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;

AdditionalInfo.propTypes = {
  backLinkHref: PropTypes.shape({
    state: PropTypes.shape({}),
  }),
};
