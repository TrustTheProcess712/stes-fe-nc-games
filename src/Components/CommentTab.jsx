const CommentTab = ({ text, author }) => {
  return (
    <section className="comment_tab">
      <header>
        <h5 className="author">Comment Author: {author} </h5>
      </header>
      <p className="comment_tab_text">{text}</p>
    </section>
  );
};

export default CommentTab;
