import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../Utility/api";
import CommentTab from "./CommentTab";

const Comments = ({ numOfComments }) => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
    <section className="review_comments">
      <h3 className="comments_title">Review Comments</h3>
      <p>Number Of Comments: {numOfComments}</p>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return <CommentTab text={comment.body} />;
        })
      ) : (
        <CommentTab text="There are no comments for this review yet, sorry!" />
      )}
    </section>
  );
};

export default Comments;
