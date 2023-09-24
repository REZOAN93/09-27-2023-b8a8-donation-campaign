import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div className=" text-center my-24 space-y-4">
        <h1 className="font-bold text-3xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div>
        <Link to={'/'}><button className="btn btn-sm ">Back to Main Page</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
