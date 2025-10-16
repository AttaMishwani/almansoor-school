// src/components/AdminAuth.jsx
import React, { useState } from "react";
import { adminLogin } from "../../supabase/auth/authService"; // updated path
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUserShield } from "react-icons/fa";

const AdminAuth = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      let user = await adminLogin(email, password);

      dispatch(setUser({ email: user.email, id: user.id }));

      navigate("/adminpanel");
    } catch (error) {
      console.error(error);
      if (error.code === "ADMIN_MISMATCH") {
        setErr("Provided credentials do not match the allowed admin.");
      } else {
        setErr(error.message || "Authentication failed.");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <FaUserShield className="text-blue-500 text-5xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            {mode === "signup" ? "Admin Sign Up" : "Admin Login"}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {mode === "signup"
              ? "Create your admin access account."
              : "Access your admin dashboard."}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="Enter your admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              required
            />
          </div>

          {err && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md">
              {err}
            </p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow transition-all duration-200"
          >
            <FaLock />
            {mode === "signup" ? "Sign Up (Admin Only)" : "Login as Admin"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminAuth;
