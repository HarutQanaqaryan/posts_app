import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { PostComment } from "./pages/postComments";
import { Posts } from "./pages/posts";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/comments" element={<PostComment />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);
