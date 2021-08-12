import React, { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setblogs] = useState([
    { title: "it is", body: "body", aurthor: "nwanoch", id: 1 },
    { title: "it is", body: "body", aurthor: "nwanoch", id: 2 },
    { title: "it is", body: "body", aurthor: "nwanoch", id: 3 },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <BlogList title={blog.title} author={blog.title} id={blog.id}/>
      ))}
    </div>
  );
}

export default Home;
