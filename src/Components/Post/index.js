import React, { Component } from "react";
import propTypes from "prop-types";
import "./Post.css";
import Comment from "../Comment";

class Post extends Component {
  render() {
    return (
      <li className="post_item">
        <div className="comment_info">
          <img
            src={this.props.post.author.avatar}
            alt="Avatar"
            className="avatar"
            width="32"
            height="32"
          />
          <div className="info_aside">
            <h2 className="profile_name">{this.props.post.author.name}</h2>
            <h3 className="comment_date">{this.props.post.date}</h3>
          </div>
        </div>
        <p className="comment">{this.props.post.content}</p>
        <hr />
        <Comment comments={this.props.post.comments} />
      </li>
    );
  }
}

Post.propTypes = {
  post: propTypes.shape({
    id: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    author: propTypes.shape({
      name: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired
    }),
    comments: propTypes.array
  })
};

export default Post;
