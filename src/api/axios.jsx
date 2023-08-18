import axios from "axios";

const instance = axios.create({
  baseURL: "http://likelionwww.com/",
  // baseURL: "http://43.202.147.226/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
