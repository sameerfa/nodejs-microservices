import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" }); //gateway
// const API = axios.create({ baseURL: "http://localhost:3000" }); //login
// const API = axios.create({ baseURL: "http://localhost:3001" }); //users

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchUsers = () => API.get("/users/");
export const signIn = (formData) => API.post("/login/signin/", formData);
