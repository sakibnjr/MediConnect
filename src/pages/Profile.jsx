import React, { useState } from "react";
import {
  FaEdit,
  FaUser,
  FaHeart,
  FaTrophy,
  FaCheckCircle,
  FaCog,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const UserProfile = () => {
  // State for user profile data (dummy data for now)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bloodType: "O+",
    donations: 12, // Number of times the user has donated blood
    achievements: [
      "Blood Donor for 5 years",
      "Donated 10+ times",
      "Helped save 50 lives",
    ],
    joinDate: "2019-04-21",
  });

  // Donation level logic based on the number of donations
  const getDonationLevel = (donations) => {
    if (donations >= 20) {
      return "Platinum Donor";
    } else if (donations >= 10) {
      return "Gold Donor";
    } else if (donations >= 5) {
      return "Silver Donor";
    } else {
      return "Bronze Donor";
    }
  };

  // State to toggle the profile edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle the profile update (simulating an update)
  const handleProfileUpdate = () => {
    setIsEditing(false);
    // Simulate updating the profile (in a real app, you would make an API call here)
  };

  return (
    <div className="min-h-screen bg-slate-500 flex flex-col text-white rounded-md">
      {/* Header Section */}
      <motion.div
        className="bg-transparent text-center py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">User Profile</h1>
        <p className="mt-2 text-lg">
          Manage your profile and view donation details
        </p>
      </motion.div>

      {/* Profile Section */}
      <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Information */}
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-6">
            <div className="size-32">
              <img
                src="https://avatar.iran.liara.run/public/38"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">Blood Type: {user.bloodType}</p>
            </div>
          </div>
        </motion.div>

        {/* Donation Level */}
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold">Donation Level</h3>
          <div className="flex items-center mt-2">
            <FaHeart className="text-red-500 text-3xl mr-2" />
            <span className="text-lg">{getDonationLevel(user.donations)}</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {user.donations} Blood Donations
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold">Achievements</h3>
          <ul className="mt-4 space-y-2">
            {user.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center text-green-500">
                <FaTrophy className="mr-2" />
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Join Date */}
        <motion.div
          className="bg-white text-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold">Join Date</h3>
          <div className="flex items-center mt-2 text-gray-600">
            <FaCalendarAlt className="mr-2" />
            <span>{user.joinDate}</span>
          </div>
        </motion.div>

        {/* Edit Profile Button */}
        <motion.div
          className="col-span-full flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-lg flex items-center space-x-2 hover:bg-green-600 shadow-lg transition duration-300 ease-in-out"
          >
            <FaEdit />
            <span>Edit Profile</span>
          </button>

          {/* Edit Form */}
          {isEditing && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white text-gray-900 p-8 rounded-xl shadow-xl w-96">
                <h3 className="text-2xl font-semibold mb-6">
                  Update Your Profile
                </h3>
                <form>
                  {/* Form fields for updating user information */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <label className="w-24 font-semibold">Name</label>
                      <input
                        type="text"
                        className="px-4 py-2 border rounded-lg w-full"
                        defaultValue={user.name}
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="w-24 font-semibold">Email</label>
                      <input
                        type="email"
                        className="px-4 py-2 border rounded-lg w-full"
                        defaultValue={user.email}
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="w-24 font-semibold">Blood Type</label>
                      <input
                        type="text"
                        className="px-4 py-2 border rounded-lg w-full"
                        defaultValue={user.bloodType}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleProfileUpdate}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      <FaCheckCircle className="mr-2" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Settings Section */}
      <motion.div
        className="bg-white text-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl m-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-semibold">Account Settings</h3>
        <div className="mt-4 flex items-center">
          <FaCog className="mr-2" />
          <span>Manage your account settings</span>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
