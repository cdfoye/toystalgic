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
          <div
            key={post._id}
            className="ListCard ListCard-rounded Listmb-3 ListCenter"
          >
            <h2 className="ListCard-header ListBg-primary ListText-light Listp-2 Listm-0">
              {showFirstName ? (
                <Link
                  className="ListText-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span className="ListText-light" style={{ fontSize: "1rem" }}>
                    {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>{post.createdAt}</span>
                </>
              )}
            </h2>
            <div className="ListCard-body whiteBackground Listp-2">
              <p className="ListText-light">{post.postText}</p>
            </div>
            <Link
              className="ListText-light ListBtn ListBtn-primary ListBtn-block ListBtn-squared"
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
