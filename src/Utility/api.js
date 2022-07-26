import axios from "axios";

const myApi = axios.create({
  baseURL: "https://stes-game.herokuapp.com/api/",
});

export function getReviews() {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
}
