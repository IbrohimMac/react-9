import { useEffect, useState } from "react";
import "./Posts.scss";
import i1 from "../../assets/I1.svg";
import Header from "../Header/Header";
// import { Link, useNavigate } from "react-router-dom";
import PostsCard from "./PostsCard";

const Posts = () => {
  // const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <div className="posts">
        <h1>Our Latest Posts</h1>
        <div className="cards">
          {posts.map((post) => (
            <div className="card">
              <img src={i1} alt="" />
              <p className="card-p">Id: {post.id}</p>
              <h3>{post.title}</h3>
              <p className="card-p1">Floyd Miles 3 Days Ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
