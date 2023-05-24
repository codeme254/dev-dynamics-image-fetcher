import axios from "axios";
import * as dotenv from "dotenv";

const KEY = import.meta.env.API_KEY;
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
