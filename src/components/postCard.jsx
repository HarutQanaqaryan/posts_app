import { NavLink, useLocation } from "react-router-dom";
import "../assets/styles/post-card.css";
import removeIcon from "../assets/remove.svg"

export const PostCard = ({ title, body, id, clickRemovePost }) => {
  const url = useLocation()
  return (
    <div className="post-card" id={id}>
      <div>
        <h5 className="post-card_title">Название: </h5>
        <p className="post-card_title_desc">{title}</p>
      </div>
      <div>
        <h5 className="post-card_post">Пост:</h5>
        <p className="post-card_post_desc">{body}</p>
      </div>
      <NavLink to={`${url.pathname}/comment`} className="post-card_comment_link" id={id}>
        Коментарии
      </NavLink>
      <img src={removeIcon} id={id} alt="Remove" onClick={clickRemovePost} className="remove-icon"/>
    </div>
  );
};
