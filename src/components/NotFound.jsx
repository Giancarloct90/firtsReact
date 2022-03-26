import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="divNotFound">
      <h1 className="pageNotFound">PAGE NOT FOUND 404!!</h1>
      <Link className="btnReturnHome" to={"/"}>
        return home
      </Link>
    </div>
  );
};

export default NotFound;
