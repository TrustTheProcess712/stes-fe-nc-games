import { useState, useEffect } from "react";
import { getReviews } from "../Utility/api";
import ReviewsCard from "./ReviewsCard";
import FilterReviews from "./FilterReviews";

const ReviewsList = () => {
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("desc");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews(sortBy).then((reviewsFromApi) => {
      // console.log(reviewsFromApi, "<<<<<<<<<<");
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [sortBy]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <section>
        <header>
          <h2>Full List of Reviews</h2>
          <FilterReviews setSortBy={setSortBy} setOrder={setOrder} />
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
    </main>
  );
};

export default ReviewsList;
