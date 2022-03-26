// LIBRARIES
import { useParams } from "react-router-dom";

// HOOKS AND CUSTOMS
import useFetch from "../hooks/useFetch";

const DetailsBlog = () => {
  const { id } = useParams();

  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="divDeatilsBlog">
      <h1 className="h1BlogSTitle">Blog Details</h1>
      {error && (
        <>
          <h1>{error}</h1>
        </>
      )}
      {blog && (
        <div className="blogss">
          <h1 className="h1Blog">{blog.title}</h1>
          <h1 className="h1Author">{blog.author}</h1>
          <h1 className="h1Body">{blog.body}</h1>
        </div>
      )}
    </div>
  );
};
export default DetailsBlog;
