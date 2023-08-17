import axios from "axios";

const instance = axios.create({
  baseURL: "https://43.202.147.226/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
