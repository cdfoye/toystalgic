import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";

import Auth from "../../utils/auth";

import "./PostFormStyles.css";

const PostForm = () => {
  const [postText, setPostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, posts: [...me.posts, addPost] } },
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.firstName,
        },
      });

      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <div className="newPost">New Post</div>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`Form-m-0 countText ${
              characterCount === 280 || error ? "logoutText" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form className="PostForm-form Textpost" onSubmit={handleFormSubmit}>
            <div className="Textpost">
              <textarea
                name="postText"
                placeholder="beep bop boop beep"
                value={postText}
                className="FormInput Form-w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="Form-col-12 Form-col-lg-3">
              <button
                className="Forumbtn Forumbtn-primary Forumbtn-block Form-py-3"
                type="submit"
              >
                Add Post
              </button>
            </div>
            {error && (
              <div className="Form-col-12 Form-my-3 logoutText Form-p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p className="countText">
          You need to be logged in to create a new post. Please{" "}
          <Link className="logoutText" to="/login">
            login
          </Link>{" "}
          or{" "}
          <Link className="logoutText" to="/signup">
            signup.
          </Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
