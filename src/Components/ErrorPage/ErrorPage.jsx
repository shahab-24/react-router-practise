import { Link, useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h3>Oooopsss!!!</h3>
    <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
          <h3>page not found</h3>
          <Link to='/'>Home</Link> </div>
      }
    </div>
  );
};

export default ErrorPage;