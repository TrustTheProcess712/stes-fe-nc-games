import { useState, useEffect } from "react";
import { getReviews } from "../Utility/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  });

  return (
    <section>
      <header className="reviews_list">
        <h1>Reviews List</h1>
      </header>

      {reviews.map(
        (review) => {
          return <p>{review.title}</p>;
        }
        //   {
        //   review_id,
        //   title,
        //   designer,
        //   owner,
        //   review_img_url,
        //   review_body,
        //   category,
        //   created_at,
        //   votes,
        //   comment_count,
        // }
      )}
    </section>
  );
};

export default ReviewsList;
