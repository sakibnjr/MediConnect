import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting after registration
import { toast } from "react-toastify"; // For success/error messages

const Register = () => {
  const navigate = useNavigate(); // For navigating to another page (e.g., login after registration)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // User role can be "user", "doctor", or "donor"
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      setIsSubmitting(false);
      return;
    }

    if (name && email && password) {
      toast.success("Registration successful!");
      navigate("/login"); // Redirect to login page after successful registration
    } else {
      toast.error("Please fill out all fields!");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVnaXN0cmF0aW9ufGVufDB8fDB8fHww')",
      }}
    >
      <main className="flex-grow flex items-center justify-center bg-black bg-opacity-50 py-16">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Select Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="user">User</option>
                <option value="doctor">Doctor</option>
                <option value="donor">Blood Donor</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
