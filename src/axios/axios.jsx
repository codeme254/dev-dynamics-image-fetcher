import axios from "axios";

const KEY = import.meta.env.VITE_API_KEY;

export const config = {
  headers: {
    Authorization: KEY,
  },
  withCredentials: false,
  "Access-Control-Allow-Origin": "*",
};

export default axios.create({
  baseURL: "https://api.pexels.com/v1/",
});
