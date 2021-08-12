import React from 'react'

function BlogList(props) {
    return (
      <div className="blog-preview" key={props.id}>
        <h2>{props.title}</h2>
        <p>written by {props.author}</p>
      </div>
    );
}

export default BlogList
