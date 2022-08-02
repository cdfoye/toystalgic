import React from "react";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

import { QUERY_POSTS } from "../utils/queries";

import "./ForumStyles.css";

const Forum = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="row">
      <div className="column side mt">
        <PostForm />
      </div>
      <div className="column middle mt">
        {loading ? <div>Loading...</div> : <PostList posts={posts} />}
      </div>
    </div>
  );
};

export default Forum;
