import axios from "axios";

const myApi = axios.create({
  baseURL: "https://stes-game.herokuapp.com/api/",
});

export function getReviews() {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
}

export function getCategories() {
  return myApi.get("categories").then((res) => {
    return res.data.categories;
  });
}

export function getCategoryByName(slug) {
  return myApi.get(`/categories`, { params: { slug } }).then(({ data }) => {
    return data.categories;
    // return data.reviews;
  });
}
