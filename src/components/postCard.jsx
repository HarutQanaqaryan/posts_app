import { NavLink, useLocation } from "react-router-dom";
import "../assets/styles/post-card.css";

export const PostCard = ({ title, body, id, userId }) => {
  const url = useLocation()
  return (
    <div className="post-card" id={userId}>
      <div>
        <h5 className="post-card_title">Название: </h5>
        <p className="post-card_title_desc">{title}</p>
      </div>
      <div>
        <h5 className="post-card_post">Пост:</h5>
        <p className="post-card_post_desc">{body}</p>
      </div>
      <NavLink to={`${url.pathname}/comment`} className="post-card_comment_link">
        Коментарии
      </NavLink>
    </div>
  );
};
