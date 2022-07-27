import axios from "axios";

const myApi = axios.create({
  baseURL: "https://stes-game.herokuapp.com/api/",
});

export function getReviews() {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
}

// export function getReviewById() {
//   return myApi.get(`/reviews/${review_id}`).then(({ data }) => {
//     return data.review;
//   });
// }
