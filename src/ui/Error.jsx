import { Link, useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <Link onClick={() => navigate(-1)}>&larr; Go back</Link>
    </div>
  );
}

export default Error;
