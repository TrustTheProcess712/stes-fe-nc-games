import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../Utility/api";
import CommentTab from "./CommentTab";

const Comments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState();

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id, comments]);

  return (
    <section className="review_comments">
      <h4 className="comments_title">Review Comments</h4>
    </section>
  );
};

export default Comments;
