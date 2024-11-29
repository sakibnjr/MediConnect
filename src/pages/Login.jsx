import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting after login
import { toast } from "react-toastify"; // For success/error messages

const Login = () => {
  const navigate = useNavigate(); // For navigating to another page (e.g., home or dashboard after login)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Dummy validation (replace with actual API call for authentication)
    if (email === "test@example.com" && password === "password123") {
      toast.success("Login successful!");
      navigate("/home"); // Redirect to the Home page after successful login
    } else {
      toast.error("Invalid email or password");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661376860609-0f50ba5b121a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <main className="flex-grow flex items-center justify-center bg-black bg-opacity-50 py-16">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Login"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
