import { Link } from "react-router-dom";

import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/profile");
  };

return (
  <form className="auth-card" onSubmit={submit}>
    <h2>Login</h2>

    <input
      type="email"
      placeholder="Email"
      onChange={e => setForm({ ...form, email: e.target.value })}
      required
    />

    <input
      type="password"
      placeholder="Password"
      onChange={e => setForm({ ...form, password: e.target.value })}
      required
    />

    <button type="submit">Login</button>

    <p>
      Don’t have an account? <Link to="/signup">Signup</Link>
    </p>
  </form>
);

};

export default Login;
