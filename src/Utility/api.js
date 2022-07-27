import axios from "axios";

const myApi = axios.create({
  baseURL: "https://stes-game.herokuapp.com/api/",
});

export function getReviews() {
  return myApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
}

export function getReviewById(review_id) {
  return myApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
}

export function getCategories() {
  return myApi.get("categories").then(({ data }) => {
    return data.categories;
  });
}

export function getCategoryByName(slug) {
  return myApi.get(`/categories`, { params: { slug } }).then(({ data }) => {
    return data.categories;
    // return data.reviews;
  });
}
