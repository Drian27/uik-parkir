import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-2 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
      <a
        href="/"
        className="bg-blue-500 p-3 mt-2 rounded-md text-white font-semibold"
      >
        Back to login
      </a>
    </div>
  );
};

export default ErrorPage;
