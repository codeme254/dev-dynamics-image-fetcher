import axios from "axios";

export const config = {
  headers: {
    Authorization: "RobVDqZRreoYIwwr0yefoaS4ZbAz1r4z65wjbNLgMYzU7lKseSJc1LyF",
  },
  withCredentials: false,
  "Access-Control-Allow-Origin": "*",
};

export default axios.create({
  baseURL: "https://api.pexels.com/v1/",
});
