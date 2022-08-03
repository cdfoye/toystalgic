import React from "react";
import { Link } from "react-router-dom";

import "./PostListStyles.css";

const PostList = ({ posts, title, showTitle = true, showFirstName = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card card-rounded mb-3">
            <h4 className="card-header ListBg-primary text-light p-2 m-0">
              {showFirstName ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span className="text-light" style={{ fontSize: "1rem" }}>
                    {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>{post.createdAt}</span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p className="text-light">{post.postText}</p>
            </div>
            <Link
              className="text-light ListBtn ListBtn-primary ListBtn-block ListBtn-squared"
              to={`/post/${post._id}`}
            >
              join the discussion
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
