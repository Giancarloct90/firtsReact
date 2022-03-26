// ASSETS
import load from "../asset/img/load.gif";

// HOOKS AND CUSTOM HOOKS
import useFetch from "../hooks/useFetch";

// COMPONENTS
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {error && (
        <div className="divError">
          <h1>{error}</h1>
        </div>
      )}
      {loading && (
        <div className="divLoading">
          <img src={load} alt="" />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="Blogs Cato" />}
    </div>
  );
};

export default Home;
