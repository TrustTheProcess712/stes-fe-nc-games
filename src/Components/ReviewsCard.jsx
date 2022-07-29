import { Link } from "react-router-dom";

const ReviewsCard = ({ review }) => {
  return (
    <article className="review_cards">
      <div className="review_cards_headers">
        <h3>{review.title}</h3>
      </div>
      <p>Category: {review.category}</p>
      <p>Designer: {review.designer}</p>
      <img
        className="review_image"
        src={review.review_img_url}
        alt={review.title}
      />
      <p>Owner: {review.owner}</p>
      <p>Votes: {review.votes}</p>
      <p>Num of Comments: {review.comment_count}</p>
      <Link to={`/reviews/${review.review_id}`}>
        <button>Read Review</button>
      </Link>
    </article>
  );
};

export default ReviewsCard;
