import React from "react";

function BlogList(props) {
  return (
    <div className="blog-preview" key={props.id}>
      <h2>{props.title}</h2>
      <p>written by {props.author}</p>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
}

export default BlogList;
