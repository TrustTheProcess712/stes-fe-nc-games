import { useState, useEffect } from "react";
import { getReviews } from "../Utility/api";
import ReviewsCard from "./ReviewsCard";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading</p>;
  return (
    <section>
      <header>
        <h2>Full List of Reviews</h2>
      </header>

      {reviews.map((review) => {
        return (
          <ReviewsCard
            className="review_list"
            review={review}
            key={review.review_id}
          />
        );
      })}
    </section>
  );
};

export default ReviewsList;
