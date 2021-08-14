import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setblogs] = useState(null);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setblogs(data);
          setisPending(false);
        });
    }, 1000);
  }, []);
  return (
    <div className="home">
      <h2>All blogs</h2>
      {isPending && <div>Loading</div>}
      {blogs &&
        blogs.map((blog) => (
          <BlogList title={blog.title} author={blog.author} id={blog.id} />
        ))}
    </div>
  );
}

export default Home;
