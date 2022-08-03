import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

import "./CommentFormStyles.css";

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.firstName,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <div className="addComment">Comment on this Post</div>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 countComment ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="textArea form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3 buttonCenter">
              <button
                className="ComListBtn ComListBtn-primary ComListBtn-block py-3"
                type="submit"
              >
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p className="addText">
          * You need to be logged in to add a comment. Please{" "}
          <Link className="logoutText" to="/login">
            login
          </Link>{" "}
          or{" "}
          <Link className="logoutText" to="/signup">
            signup{" "}
          </Link>
          *
        </p>
      )}
    </div>
  );
};

export default CommentForm;
