import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [erros, setErrors] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    // console.log(blog);
    // return;
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      if (!response.ok) {
        setErrors(true);
        throw Error("error server");
      }
      console.log("inserted");
      // history.go(-1);
      history.push("/");
    } catch (error) {
      setErrors(true);
      console.log("erro");
    }
  };

  return (
    <div className="createBlogDiv">
      <h1 className="createBlogTitle">Nuevo Blog</h1>
      {erros && (
        <>
          <h1 className="txtErrorCreate">Error as courrer</h1>
        </>
      )}
      {!erros && (
        <form action="" className="formBlogs" onSubmit={handleSubmit}>
          <div className="divInputs">
            <label htmlFor="">Label Blog</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="divInputs">
            <label htmlFor="">Blog body</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <div className="divInputs">
            <label htmlFor="">Blog author</label>
            <select
              name=""
              id=""
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>
          </div>
          <button className="btnAddBlog">Add Blog</button>
        </form>
      )}
    </div>
  );
};

export default CreateBlog;
