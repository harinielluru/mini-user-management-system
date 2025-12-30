import { Link } from "react-router-dom";

import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    alert("Signup successful");
    navigate("/login");
  };

 return (
  <form className="auth-card" onSubmit={submit}>
    <h2>Signup</h2>

    <input
      type="text"
      placeholder="Full Name"
      onChange={e => setForm({ ...form, fullName: e.target.value })}
      required
    />

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

    <button type="submit">Signup</button>

    <p>
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </form>
);

};

export default Signup;
