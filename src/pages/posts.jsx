import { useCallback, useEffect, useState } from "react";
import { PostCard } from "../components/postCard";
import { getData } from "../helpers/getData";
import loadingIcon from "../assets/loading.svg";
import { Pagination } from "../components/pagaination";
import { SearchPost } from "../components/searchInput";
import { Error } from "../components/error";
import { NotFound } from "../components/notFound";
import "../assets/styles/posts.css";
import { NewPost } from "../components/newPost";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    !localStorage.getItem("Data") &&
      getData()
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
          setError(false);
          localStorage.setItem("Posts", JSON.stringify(data));
        })
        .catch((e) => {
          e ? setError(true) : setError(false);
        });
  }, []);

  const handleSearchValue = useCallback(({ target: { value } }) => {
    setSearchValue(value);
  }, []);

  const filterPosts = useCallback(() => {
    setPosts((items) =>
      items.filter(
        (el) => el.title.includes(searchValue) || el.body.includes(searchValue)
      )
    );
  }, [searchValue]);

  useEffect(() => {
    if (searchValue !== "" && posts.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [posts.length, searchValue]);
  
  const removePost = useCallback((e) => {
    setPosts((items) =>
      items.filter((el) => JSON.stringify(el.id) !== e.target.id)
    );
  }, []);

  const savePostId = (e) => {
    localStorage.setItem("Post Id", e.target.id);
  };

  const openNewPostForm = () => {
    isOpenedModal ? setIsOpenedModal(false) : setIsOpenedModal(true);
  };

  useEffect(() => {
    if (searchValue === "") {
      setPosts(JSON.parse(localStorage.getItem("Posts")));
      setNotFound(false);
    }
  }, [searchValue]);

  return (
    <div className="posts">
      <h1 className="posts-header">Посты</h1>

      {loading && <img src={loadingIcon} alt="loading..." />}

      <SearchPost
        searchValue={searchValue}
        onChange={(e) => handleSearchValue(e)}
        onClick={filterPosts}
      />
      <button
        className={`${isOpenedModal ? "modal" : "posts-type-new-post"}`}
        onClick={openNewPostForm}
      >
        {`${isOpenedModal ? "Закрыть" : "Написать новый Пост"}`}
      </button>
      {currentPost.map(({ title, body, id }) => (
        <PostCard
          title={title}
          body={body}
          postId={id}
          id={id}
          key={id}
          clickRemovePost={(e) => removePost(e)}
          clickSeeComments={(e) => savePostId(e)}
        />
      ))}
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {error && <Error />}
      {notFound && <NotFound />}
      {isOpenedModal && <NewPost />}
    </div>
  );
};
