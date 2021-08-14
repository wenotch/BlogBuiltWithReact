import React from "react";
import { Link } from "react-router-dom";

function BlogList(props) {
  return (
    <div className="blog-preview">
      <Link to={`/blogs/${props.id}`}>
        <h2>{props.title}</h2>
        <p>written by {props.author}</p>
      </Link>
    </div>
  );
}

export default BlogList;
