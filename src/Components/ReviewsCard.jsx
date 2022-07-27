import { Link } from "react-router-dom";

const ReviewsCard = ({
  review_id,
  title,
  designer,
  owner,
  imgUrl,
  reviewBody,
  category,
  createdAt,
  votes,
  commentCount,
}) => {
  return (
    <article>
      <h2>{title}</h2>
      <Link to="/reviews/:review_id">
        <button>Select Review</button>{" "}
      </Link>
      <h3>Category: {category}</h3>
      <p>Designer: {designer}</p>
      <img className="review_image" src={imgUrl} alt={title} />
      <p>Owner: {owner}</p>
      <p>{reviewBody}</p>
      <p>Votes: {votes}</p>
      <p>Num of Comments: {commentCount}</p>
    </article>
  );
};

export default ReviewsCard;
