import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";
import axios from "axios";

const SingleCategory = () => {
  const { category_name } = useParams();
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://stes-game.herokuapp.com/api/reviews`).then((res) => {
      const filteredReviews = res.data.reviews.filter((reviews) => {
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
