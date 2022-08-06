import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_POST } from "../utils/queries";

import BackgroundImg from "../assets/forum_bckgrnd.jpg";
import "./SinglePostStyles.css";

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        minHeight: "80vh",
      }}
    >
      <div className="wrap">
        <div className="SingleCard SingleCard-rounded">
          <h3 className="SingleCard-header PostBg-primary PostText-light single-p-2 single-m-0 commentCenter">
            {post.postAuthor} <br />
            <span className="PostText-light" style={{ fontSize: "1rem" }}>
              on {post.createdAt}
            </span>
          </h3>
          <div className="SingleCard-body Postbg-light commentCenter">
            <blockquote className="blockQuote">{post.postText}</blockquote>
          </div>

          <div className="Postbg-light">
            <CommentList comments={post.comments} />
          </div>
          <div className="Postbg-gray Single-p-4 SingleCard-rounded buttonContainer single-my-3">
            <CommentForm postId={post._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
