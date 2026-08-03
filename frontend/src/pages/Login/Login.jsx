import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { toast } from "react-toastify";

import { loginUser } from "../../services/authService";
import { saveToken } from "../../utils/auth";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.warning("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(form);

      saveToken(response.token);

      toast.success("Login Successful!");

      navigate("/");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ||
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">

        <div className="flex justify-center mb-5">
          <ShieldCheck
            size={60}
            className="text-cyan-600"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">
          Sentinel AI
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg transition"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-cyan-600 font-semibold"
          >
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;