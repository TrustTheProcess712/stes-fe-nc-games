import axios from "axios";

const myApi = axios.create({
  baseURL: "https://stes-nc-games.onrender.com/api",
});

export function getReviews(sortBy) {
  return myApi.get(`/reviews?sort_by=${sortBy}`).then(({ data }) => {
    return data.reviews;
  });
}

export function getReviewById(review_id) {
  return myApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
}

export function getCategories() {
  return myApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
}

export function getCategoryByName(slug) {
  return myApi.get(`/categories`, { params: { slug } }).then(({ data }) => {
    console.log(data, "<<<<<");
    return data.categories;
  });
}

export function patchReviewVotes(review_id, inc_votes) {
  return myApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data.review;
    });
}

export function getComments(review_id) {
  return myApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function postComment(review_id, comment) {
  return myApi.post(`/reviews/${review_id}/comments`, comment);
}
