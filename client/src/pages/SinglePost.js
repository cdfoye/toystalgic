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
      }}
    >
      <div className="wrap">
        <div className="card card-rounded">
          <h3 className="card-header ListBg-primary text-light p-2 m-0">
            {post.postAuthor} <br />
            <span className="text-light" style={{ fontSize: "1rem" }}>
              on {post.createdAt}
            </span>
          </h3>
          <div className="card-body bg-light">
            <blockquote className="blockQuote">{post.postText}</blockquote>
          </div>

          <div className="my-3">
            <CommentList comments={post.comments} />
          </div>
          <div
            className="m-3 p-4 card-rounded buttonContainer"
            style={{ border: "1px solid #1a1a1a" }}
          >
            <CommentForm postId={post._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
