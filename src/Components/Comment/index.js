import React from "react";
import propTypes from "prop-types";
import "./comment.css";

function Comment(props) {
  return (
    <div className="comments">
      {props.comments.map(comment => (
        <div key={comment.id} className="comment">
          <img
            src={comment.author.avatar}
            className="avatar"
            height="32"
            width="32"
            alt={comment.author.name}
          />
          <p className="content">
            <small>{comment.author.name}</small>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

Comment.propTypes = {
  comments: propTypes.array
};

export default Comment;
