import React, { Component } from "react";
import "./PostList.css";
import PostItem from "../Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "user 1",
          avatar: "http://localhost:8081/Assets/img/User1.jpg"
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, quod!",
        comments: [
          {
            id: 2,
            author: {
              name: "User 2",
              avatar: "http://localhost:8081/Assets/img/User2.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis quaerat itaque amet est nesciunt maiores sequi temporibus iste nisi ipsum neque earum molestias explicabo, eaque quis totam! Consequuntur neque voluptas tempora voluptate velit doloribus suscipit quibusdam cumque impedit sit, odio libero quidem ad quos ipsum quas cupiditate a pariatur ipsam iure voluptatem? Iure vero amet magni pariatur praesentium quam."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "user 2",
          avatar: "http://localhost:8081/Assets/img/User2.jpg"
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, quod!",
        comments: [
          {
            id: 3,
            author: {
              name: "User 3",
              avatar: "http://localhost:8081/Assets/img/User3.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis quaerat itaque amet est nesciunt maiores sequi temporibus iste nisi ipsum neque earum molestias explicabo, eaque quis totam! Consequuntur neque voluptas tempora voluptate velit doloribus suscipit quibusdam cumque impedit sit, odio libero quidem ad quos ipsum quas cupiditate a pariatur ipsam iure voluptatem? Iure vero amet magni pariatur praesentium quam."
          },
          {
            id: 4,
            author: {
              name: "User 4",
              avatar: "http://localhost:8081/Assets/img/User4.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis quaerat itaque amet est nesciunt maiores sequi temporibus iste nisi ipsum neque earum molestias explicabo, eaque quis totam! Consequuntur neque voluptas tempora voluptate velit doloribus suscipit quibusdam cumque impedit sit, odio libero quidem ad quos ipsum quas cupiditate a pariatur ipsam iure voluptatem? Iure vero amet magni pariatur praesentium quam."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul className="post_list">
        {this.state.posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
