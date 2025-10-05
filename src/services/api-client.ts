import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3685f0a499654268a9232fe31fa08d86",
  },
});
