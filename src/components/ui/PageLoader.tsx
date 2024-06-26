import React from 'react';
import Spinner from './Spinner';

const PageLoader: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <Spinner className="stroke-primary w-5 h-5" hintText="loading..." />
      </div>
    </div>
  );
};

export default PageLoader;
