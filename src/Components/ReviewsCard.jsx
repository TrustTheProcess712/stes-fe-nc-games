const ReviewsCard = ({ review }) => {
  return (
    <article>
      <h3>{review.title}</h3>
      <p>Category: {review.category}</p>
      <p>Designer: {review.designer}</p>
      <img
        className="review_image"
        src={review.review_img_url}
        alt={review.title}
      />
      {/* <p>Owner: {review.owner}</p>
      <p>{review.review_body}</p> */}
      <p>Votes: {review.votes}</p>
      <p>Num of Comments: {review.comment_count}</p>
    </article>
  );
};

export default ReviewsCard;
