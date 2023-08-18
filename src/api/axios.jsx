import axios from "axios";

const instance = axios.create({
  // baseURL: "http://likelionwww.com/",
  // baseURL: "http://43.202.147.226/",
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
