import { useCallback, useEffect, useState } from "react";
import { PostCard } from "../components/postCard";
import { getData } from "../helpers/getData";
import loadingIcon from "../assets/loading.svg";
import { Pagination } from "../components/pagaination";
import { SearchPost } from "../components/searchInput";
import { Error } from "../components/error";
import { NotFound } from "../components/notFound";
import "../assets/styles/posts.css";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchValue = useCallback(({ target: { value } }) => {
    setSearchValue(value);
  }, []);

  const filterPosts = useCallback(() => {
    setPosts((items) =>
      items.filter(
        (el) => el.title.includes(searchValue) || el.body.includes(searchValue)
      )
    ) || setNotFound(true);
  }, [searchValue]);

  const removePost = (e) => {
    setPosts((items) =>
      items.filter(
        (el) => JSON.stringify(el.id) !== e.target.id
      )
    );
  };

  const savePostId = (e) => {
    localStorage.setItem("Post Id", e.target.id)
  }

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
    </div>
  );
};
