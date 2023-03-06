import React from "react";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";
import PostForm from "../components/postForm";

import { QUERY_POSTS } from "../utils/queries";

import BackgroundImg from "../assets/forum_bckgrnd.jpg";
import "./ForumStyles.css";

const Forum = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="purple-out">

    <div className="forum-background"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
      }}
    >
      <div className="blogContent">
      <div className="ForumRow">
        <PostForm />
      </div>
      <div className="ForumRow">
        {loading ? <div>Loading...</div> : <PostList posts={posts} />}
      </div></div>
    </div></div>
  );
};

export default Forum;
