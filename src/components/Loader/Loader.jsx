import { BallTriangle } from 'react-loader-spinner';
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#f58a2c"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      ;
    </div>
  );
};

export default Loader;
