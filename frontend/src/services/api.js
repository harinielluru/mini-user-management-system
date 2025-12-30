// import axios from "axios";

const API = axios.create({
  baseURL: "https://mini-user-management-system-1zv0.onrender.com/api"
});

// ✅ Attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
