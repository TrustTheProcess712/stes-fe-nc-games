import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../Utility/api";
import ReviewsCard from "./ReviewsCard";

const SelectedReview = () => {
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
      <article>
        <div className="selected_review_headers">
          <h3>{singleReview.title}</h3>
          <h4>Category: {singleReview.category}</h4>
        </div>

        <p>Designer: {singleReview.designer}</p>
        <img
          className="review_image"
          src={singleReview.review_img_url}
          alt={singleReview.title}
        />
        <p>Owner: {singleReview.owner}</p>
        <p>Review: {singleReview.review_body} </p>
        <p>Votes: {singleReview.votes}</p>
        <p>Num of Comments: {singleReview.comment_count}</p>
      </article>
    </section>
  );
};

export default SelectedReview;
