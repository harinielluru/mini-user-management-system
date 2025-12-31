import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);


      localStorage.setItem("token", res.data.token);

      navigate("/profile");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <form className="auth-card" onSubmit={submit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
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
