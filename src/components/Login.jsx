import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (userId === "admin@123" && userPassword === "admin") {
      navigate("/admin");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h1>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="adminId"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Admin ID
            </label>
            <input
              required
              id="adminId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter admin ID"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              required
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              id="password"
              type="password"
              placeholder="Enter password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
