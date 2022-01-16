import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/post-card.css";
import removeIcon from "../assets/remove.svg";

export const PostCard = ({
  title,
  body,
  id,
  postId,
  clickRemovePost,
  clickSeeComments,
}) => {
  return (
    <div className="post-card" id={postId}>
      <div>
        <h5 className="post-card_title">Название: </h5>
        <p className="post-card_title_desc">{title}</p>
      </div>
      <div>
        <h5 className="post-card_post">Пост:</h5>
        <p className="post-card_post_desc">{body}</p>
      </div>
      <NavLink
        to="/posts/comments"
        className="post-card_comment_link"
        id={id}
        onClick={clickSeeComments}
      >
        Коментарии
      </NavLink>
      <img
        src={removeIcon}
        id={id}
        alt="Remove"
        onClick={clickRemovePost}
        className="remove-icon"
      />
    </div>
  );
};
