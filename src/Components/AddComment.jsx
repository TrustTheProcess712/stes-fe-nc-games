import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Utility/api";

const AddComment = ({ setComments }) => {
  const { review_id } = useParams();
  const [commentToAdd, setCommentToAdd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    postComment(review_id, { body: commentToAdd, username: "cooljmessy" })
      .then((res) => {
        setCommentToAdd("");
        setIsLoading(true);
        setComments((currentComment) => [...currentComment, res.data.comment]);
      })
      .catch((err) => {
        setError(true);
      });
  }
  useEffect(() => {}, [isLoading]);
  return (
    <section>
      <h3 className="post_comment">Post Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <legend>Please Input Comment Here</legend>
          <textarea
            type="text"
            value={commentToAdd}
            onChange={(e) => setCommentToAdd(e.target.value)}
            rows="4"
          ></textarea>
          {isLoading ? (
            <p className="isLoading"> Submitting comment, please wait...</p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            setCommentToAdd("");
          }}
          type="reset"
        >
          Refresh
        </button>
      </form>
    </section>
  );
};

export default AddComment;
