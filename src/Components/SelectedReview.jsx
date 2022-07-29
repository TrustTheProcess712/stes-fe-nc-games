import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../Utility/api";
import Comments from "./Comments";
import AddComment from "./AddComment";

import UpdateVotes from "./UpdateVotes";

const SelectedReview = ({ author }) => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>Loading</p>;

  return (
    <section>
      <h2>Selected Review</h2>
      <article className="selected_review">
        <div className="selected_review_headers">
          <h3>{singleReview.title}</h3>
        </div>
        <p>Category: {singleReview.category}</p>
        <p>Designer: {singleReview.designer}</p>
        <img
          className="review_image"
          src={singleReview.review_img_url}
          alt={singleReview.title}
        />
        <h3 className="review">Review</h3>
        <div className="review_body">
          <h5>Review Author: {singleReview.owner}</h5>
          <p> {singleReview.review_body} </p>
        </div>
        <UpdateVotes votes={singleReview.votes} />
        <Comments numOfComments={singleReview.comment_count} />
      </article>
    </section>
  );
};

export default SelectedReview;
