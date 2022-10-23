import axios from "axios";

const useAxios = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8080/api",
  timeout: 5000,
});

export default useAxios;
