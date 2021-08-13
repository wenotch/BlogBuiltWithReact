import React, { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setblogs] = useState([
    { title: "it is 1", body: "body", aurthor: "nwanoch", id: 1 },
    { title: "it is 2", body: "body", aurthor: "nwanoch", id: 2 },
    { title: "it is 3", body: "body", aurthor: "nwanoch", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newblog = blogs.filter((blog) => blog.id !== id);
    setblogs(newblog);
  };
  return (
    <div className="home">
      <h2>All blogs</h2>
      {blogs.map((blog) => (
        <BlogList
          title={blog.title}
          author={blog.title}
          id={blog.id}
          delete={() => handleDelete(blog.id)}
        />
      ))}
    </div>
  );
}

export default Home;
