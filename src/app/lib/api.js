import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCategoryProducts = async (category, limit = 8, skip = 0) => {
  try {
    const res = await api.get(`/category/${category}?limit=${limit}&skip=${skip}`);
    return res.data.products;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
