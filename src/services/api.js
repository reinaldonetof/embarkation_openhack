import axios from "axios";

const api = axios.create({
  baseURL: "https://red-equinox-253000.appspot.com/api"
});

export default api;
