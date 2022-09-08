import { UserProfile } from "../Context/UserProfile";
import { useState, useContext } from "react";
import axios from "axios";

const CommentTab = ({ text, author, comment }) => {
  const [commentToDeleteID, setCommentToDeleteID] = useState();
  const { userProfile } = useContext(UserProfile);

  const handleClick = (e) => {
    e.preventDefault();
    setCommentToDeleteID(e.target.value);

    console.log(commentToDeleteID, "<<<<<<<");
    axios
      .delete(`https://stes-game.herokuapp.com/api/comments/${e.target.value}`)
      .then((res) => {
        console.log("article deleted");
        window.location.reload(true);
      });
  };

  console.log(comment);
  return (
    <section className="comment_tab">
      <header>
        <h5 className="author">Comment Author: {author} </h5>
      </header>
      <p className="comment_tab_text">{text}</p>
      <div className="deletebutton">
        {userProfile.username === author ? (
          <button
            onClick={handleClick}
            value={comment.comment_id}
            className="commentCard_delete"
          >
            Delete Comment
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default CommentTab;
