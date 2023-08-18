import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  // baseURL: "http://43.202.147.226/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
