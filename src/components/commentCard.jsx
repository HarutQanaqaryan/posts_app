import React from "react";
import "../assets/styles/post-card.css";

export const CommentsCard = ({ name, email, body }) => {
  return (
    <div className="post-card">
      <div>
        <h5 className="post-card_title">Имя: </h5>
        <p className="post-card_title_desc">{name}</p>
      </div>
      <div>
        <h5 className="post-card_post">Эл.почта:</h5>
        <p className="post-card_post_desc">{email}</p>
      </div>
      <div>
        <h5 className="post-card_post">Комментарий:</h5>
        <p className="post-card_post_desc">{body}</p>
      </div>
    </div>
  );
};
