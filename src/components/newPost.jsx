import "../assets/styles/new-post.css";

export const NewPost = () => {
  return (
    <form className="new-post-form">
      <div className="new-post-form_item">
        <label htmlFor="name" className="new-post-form_label">
          Имя:
        </label>
        <input type="text" id="name" className="new-post-form_input" />
      </div>
      <div className="new-post-form_item">
        <label htmlFor="email" className="new-post-form_label">
          Эл.почта:
        </label>
        <input type="text" id="email" className="new-post-form_input" />
      </div>
      <div className="new-post-form_item">
        <label htmlFor="post" className="new-post-form_label">
          Пост:
        </label>
        <textarea type="text" id="post" className="new-post-form_textarea" />
      </div>
      <button className="new-post-form_btn">Отправить</button>
    </form>
  );
};
