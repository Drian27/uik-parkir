import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-2 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
