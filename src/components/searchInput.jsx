import "../assets/styles/posts.css";

export const SearchPost = ({ searchValue, onChange, onClick }) => {
  return (
    <div className="search-post">
      <input
        type="text"
        placeholder="Поиск..."
        className="search-post_input"
        value={searchValue}
        onChange={onChange}
      />
      <button className="search-post_btn" onClick={onClick}>
        Найти
      </button>
    </div>
  );
};
