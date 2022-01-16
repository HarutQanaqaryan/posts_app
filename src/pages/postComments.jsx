import React from "react";
import { useEffect, useState } from "react";
import { getPostComments } from "../helpers/getPostComment";
import loadingIcon from "../assets/loading.svg";
import { Error } from "../components/error";
import "../assets/styles/posts.css";
import { CommentsCard } from "../components/commentCard";
import { NavLink } from "react-router-dom";

export const PostComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const postId = localStorage.getItem("Post Id");

  useEffect(() => {
    setLoading(true);
    getPostComments(postId)
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((e) => (e ? setError(true) : setError(false)));
  }, [postId]);


  return (
    <div className="posts">
      <h1 className="posts-header">Коментарии</h1>
      {comments.map(({ name, email, body, id }) => (
        <CommentsCard name={name} email={email} body={body} key={id}/>
      ))}
      <NavLink to="/posts" className="comment-card_back">
        Назад к постам
      </NavLink>
      {loading && <img src={loadingIcon} alt="loading..." />}

      {error && <Error />}
    </div>
  );
};
