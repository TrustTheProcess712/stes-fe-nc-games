import { useState, useEffect } from "react";
import { getReviews } from "../Utility/api";
import ReviewsCard from "./ReviewsCard";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);
  console.log(reviews, "<<<<<");

  return (
    <section>
      <header className="reviews_list">
        <h1>Full List of Reviews</h1>
      </header>

      {reviews.map(
        ({
          review_id,
          title,
          designer,
          owner,
          review_img_url,
          review_body,
          category,
          created_at,
          votes,
          comment_count,
        }) => {
          return (
            <ReviewsCard
              key={review_id}
              review_id={review_id}
              title={title}
              designer={designer}
              owner={owner}
              imgUrl={review_img_url}
              reviewBody={review_body}
              category={category}
              createdAt={created_at}
              votes={votes}
              commentCount={comment_count}
            />
          );
        }
      )}
    </section>
  );
};

export default ReviewsList;
