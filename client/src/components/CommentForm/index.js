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
            className={`new-m-0 countComment ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="new-ml-2">{error.message}</span>}
          </p>
          <form
            className="CommentForm-form new-flex-row new-justify-center new-justify-space-between-md new-align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="new-col-12 new-col-lg-9">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="textArea new-form-input"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="new-col-12 new-col-lg-3 buttonCenter">
              <button
                className="ComListBtn ComListBtn-primary ComListBtn-block"
                type="submit"
              >
                Add Comments
              </button>
            </div>
          </form>
        </>
      ) : (
        <p className="addText">
          * You need to be logged in to add a comment. Please{" "}
          <Link className="com-logoutText" to="/login">
            login
          </Link>{" "}
          or{" "}
          <Link className="com-logoutText" to="/signup">
            signup{" "}
          </Link>
          *
        </p>
      )}
    </div>
  );
};

export default CommentForm;
