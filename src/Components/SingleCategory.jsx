import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../Utility/api";
import ReviewsCard from "./ReviewsCard";

const SingleCategory = () => {
  const { category_name } = useParams();
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      // this is temporary delete after backend API is completed
      const filteredReviews = reviews.filter((reviews) => {
        if (reviews.category === category_name) {
          return true;
        } else {
          return false;
        }
      });
      setCategoryReviews(filteredReviews);
      setIsLoading(false);
    });
  }, [category_name]);

  if (isLoading) return <p>Loading</p>;
  return (
    <section>
      <h2>Welcome to the {category_name} section!</h2>
      {categoryReviews.map((review) => {
        return <ReviewsCard review={review} key={review.review_id} />;
      })}
    </section>
  );
};

export default SingleCategory;
