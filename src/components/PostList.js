import React, { useEffect } from "react";

import { fetchPosts, deletePost } from "../store/actions";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deletePost(id));
    }
  };

  return (
    <div className="container mt-4">
      <h2>All Blog Posts</h2>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card">  
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
