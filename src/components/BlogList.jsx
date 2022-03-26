import { useState } from "react";
import { useHistory } from "react-router-dom";
// LIBRARIES
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const history = useHistory();
  // const [errorss, setErrorss] = useState(false);
  const [error, setError] = useState(false);
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      setError(true);
    }
    setError(false);
    console.log("Deleted");
    history.go(0);
  };
  return (
    <>
      {error && (
        <>
          <h1>error ocurrer</h1>
        </>
      )}
      {!error && (
        <>
          <h2 className="titleBlogs">{title}</h2>
          <div className="blogs">
            {blogs.map((blog) => (
              <div className="blog" key={blog.id}>
                <p className="blogTitle">{blog.title}</p>
                <p className="blogAuthor">{blog.author}</p>
                <button
                  className="btnDeleteBlog"
                  onClick={() => handleDelete(blog.id)}
                >
                  DELETE BLOG
                </button>
                <Link to={`/details/${blog.id}`}>
                  <button className="btnDetalle">Detalle</button>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BlogList;
