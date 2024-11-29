import React, { useState } from "react";
import {
  FaRegComments,
  FaRegThumbsUp,
  FaUser,
  FaHeart,
  FaCalendarAlt,
  FaPoll,
} from "react-icons/fa";
import { motion } from "framer-motion";

const CommunityPage = () => {
  // Dummy data for community content
  const [posts] = useState([
    {
      id: 1,
      title: "Living with Diabetes",
      content: "Share your experiences and tips for managing diabetes.",
      author: "John Doe",
      date: "2024-11-29",
      likes: 15,
      comments: 5,
    },
    {
      id: 2,
      title: "Mental Health Matters",
      content: "Let's talk about mental health, self-care, and therapy.",
      author: "Jane Doe",
      date: "2024-11-28",
      likes: 25,
      comments: 12,
    },
    {
      id: 3,
      title: "Heart Health Tips",
      content: "Preventive tips for a healthy heart and lifestyle.",
      author: "Dr. James",
      date: "2024-11-27",
      likes: 30,
      comments: 8,
    },
  ]);

  // Dummy data for upcoming events
  const events = [
    {
      title: "Blood Donation Drive",
      date: "2024-12-05",
      location: "City Hospital",
      description: "Join us for a blood donation drive.",
    },
    {
      title: "Mental Wellness Webinar",
      date: "2024-12-10",
      location: "Online",
      description: "Free webinar on stress management techniques.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <motion.div
        className="bg-blue-600 text-white p-6 rounded-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold">Community Hub</h1>
        <p className="mt-2 text-lg">
          Connect with others, share experiences, and get support on your health
          journey.
        </p>
      </motion.div>
      {/* Community Features */}
      <div className="flex-grow p-6 space-y-8">
        {/* Discussion Threads Section */}
        <motion.div
          className="bg-white p-6 rounded-md shadow-md"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Discussion Threads</h2>
          <p className="mt-2 text-gray-600">
            Join the conversation and share your thoughts.
          </p>
          <div className="space-y-4 mt-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-200 rounded-md shadow-sm"
              >
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-700 mt-2">{post.content}</p>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>Posted by: {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="flex items-center text-yellow-500">
                    <FaRegThumbsUp className="mr-1" />
                    <span>{post.likes} Likes</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaRegComments className="mr-1" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Groups Section */}
        <motion.div
          className="bg-white p-6 rounded-md shadow-md"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Join a Group</h2>
          <p className="mt-2 text-gray-600">
            Connect with others in these specialized groups.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-100 p-4 rounded-md shadow-md flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Diabetes Care</h3>
                <p className="text-gray-600 mt-2">
                  A group for those managing diabetes.
                </p>
              </div>
              <FaHeart className="text-blue-500 text-4xl" />
            </div>
            <div className="bg-green-100 p-4 rounded-md shadow-md flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Mental Wellness</h3>
                <p className="text-gray-600 mt-2">
                  Support group for mental health awareness.
                </p>
              </div>
              <FaUser className="text-green-500 text-4xl" />
            </div>
            <div className="bg-yellow-100 p-4 rounded-md shadow-md flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Heart Health</h3>
                <p className="text-gray-600 mt-2">
                  A group for heart disease prevention and management.
                </p>
              </div>
              <FaHeart className="text-yellow-500 text-4xl" />
            </div>
            <div className="bg-red-100 p-4 rounded-md shadow-md flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Fitness and Lifestyle</h3>
                <p className="text-gray-600 mt-2">
                  For sharing fitness routines and healthy living tips.
                </p>
              </div>
              <FaRegComments className="text-red-500 text-4xl" />
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div
          className="bg-white p-6 rounded-md shadow-md"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <p className="mt-2 text-gray-600">
            Check out upcoming health-related events near you.
          </p>
          <div className="space-y-4 mt-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-md shadow-sm"
              >
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-700 mt-2">{event.description}</p>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Polls Section */}
        <motion.div
          className="bg-white p-6 rounded-md shadow-md"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Polls & Surveys</h2>
          <p className="mt-2 text-gray-600">
            Join our community polls and share your thoughts.
          </p>
          <div className="space-y-4 mt-6">
            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">
                What is your preferred method of exercise?
              </h3>
              <div className="mt-4 flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Running
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Yoga
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">
                  Cycling
                </button>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">
                How often do you visit the doctor for a check-up?
              </h3>
              <div className="mt-4 flex items-center space-x-4">
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                  Annually
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Every 6 Months
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Rarely
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      =
    </div>
  );
};

export default CommunityPage;
