import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const { name, email, password, confirmPassword } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    dispatch(register({ name, email, password }));
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md border rounded-md shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-4">
          Create an Account
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          {/* ======password & confirm password======= */}
          <div className="flex justify-between items-center gap-4 mb-4">
            {/* Password */}
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="Re-enter your password"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-medium"
          >
            Register
          </button>
        </form>

        {/* Redirect to login */}
        <p className="text-sm text-gray-600 text-center mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
