import React from "react";

import "./CommentListStyles.css";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <div className="newComment">No Comments Yet</div>;
  }

  return (
    <>
      <div className="newComment p-2">Comments</div>
      <div className="">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="outer">
              <div className="text-light commentWidth">
                <p className="commentInfo ComCard-header textDisplay">
                  {/* &#8226; adds a bullet in the text  */}
                  {comment.commentAuthor} &#8226; {comment.createdAt}:
                </p>
                <p className="commentText textDisplay">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
