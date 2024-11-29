import React, { useState } from "react";
//import Header from "../components/Header"; // Import Header
//import Footer from "../components/Footer"; // Import Footer
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Post from "../components/Post"; // Import Post component
import Review from "../components/Review"; // Import Review component
import UserCard from "../components/UserCard"; // Import UserCard component
import Pagination from "../components/Pagination"; // Import Pagination

// import UserAuthControl from "../components/UserAuthControl";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Dummy data for posts
  const posts = [
    {
      title: "The Importance of Blood Donation",
      content:
        "Blood donation saves lives and improves health outcomes. Get involved today!",
      author: "Dr. John Doe",
      date: "2024-11-28",
      image:
        "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Managing Diabetes Effectively",
      content:
        "Explore the latest tips and treatment options for living with diabetes.",
      author: "Dr. Jane Wilson",
      date: "2024-11-27",
      image:
        "https://plus.unsplash.com/premium_photo-1716719138414-0ae0b852695a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhYmV0aWNzfGVufDB8fDB8fHww",
    },
    {
      title: "Heart Health Awareness Month",
      content:
        "Learn how to maintain a healthy heart with diet, exercise, and check-ups.",
      author: "Dr. Sarah Lee",
      date: "2024-11-25",
      image:
        "https://plus.unsplash.com/premium_photo-1675808575920-8010494407e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Mental Health Matters",
      content:
        "Discussing the importance of mental health awareness and support.",
      author: "Dr. Emily Carter",
      date: "2024-11-24",
      image:
        "https://plus.unsplash.com/premium_photo-1683865775849-b958669dca26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww",
    },
    {
      title: "Signs of Vitamin Deficiency",
      content:
        "How to recognize and address common vitamin deficiencies in your diet.",
      author: "Dr. Michael Adams",
      date: "2024-11-23",
      image:
        "https://plus.unsplash.com/premium_photo-1661375232715-48fa77c96812?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dml0YW1pbiUyMHByb2JsZW18ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Staying Active in Winter",
      content:
        "Tips for maintaining an active lifestyle during the colder months.",
      author: "Dr. Laura Hill",
      date: "2024-11-22",
      image:
        "https://plus.unsplash.com/premium_photo-1681883488185-a7e449b658d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "The Role of Nutrition in Immunity",
      content: "Boost your immune system with the right nutrition choices.",
      author: "Dr. David Clarke",
      date: "2024-11-21",
      image:
        "https://plus.unsplash.com/premium_photo-1681997035840-476c23012982?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1tdW5pdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Dealing with Chronic Pain",
      content:
        "Strategies for managing chronic pain and improving quality of life.",
      author: "Dr. Anna Baker",
      date: "2024-11-20",
      image:
        "https://plus.unsplash.com/premium_photo-1678310820376-2adc38e16d0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzZWFzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Breaking Myths About Vaccines",
      content:
        "Debunking common misconceptions about vaccines and their safety.",
      author: "Dr. Steven Patel",
      date: "2024-11-19",
      image:
        "https://plus.unsplash.com/premium_photo-1661594541188-eced45c90bdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "The Benefits of Yoga for Stress Relief",
      content: "How yoga can help reduce stress and improve mental clarity.",
      author: "Dr. Olivia Evans",
      date: "2024-11-18",
      image:
        "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  // Dummy data for reviews
  const reviews = [
    {
      user: "Michael Brown",
      rating: 4,
      comment: "Great experience with Dr. Sarah.",
      date: "2024-11-26",
    },
    {
      user: "Jane Smith",
      rating: 5,
      comment:
        "Dr. Jane Wilson explained everything clearly. Highly recommended!",
      date: "2024-11-28",
    },

    {
      user: "Emily Davis",
      rating: 5,
      comment: "Dr. John Doe helped me understand my condition in detail.",
      date: "2024-11-24",
    },
  ];

  // Dummy data for featured doctors
  const featuredDoctors = [
    {
      name: "Dr. Sarah Lee",
      role: "Cardiologist",
      bio: "Specialist in cardiology and heart health.",
      avatar: "https://avatar.iran.liara.run/public/job/doctor/female",
      contactInfo: {
        phone: "(123) 456-7890",
        email: "sarahlee@example.com",
      },
    },
    {
      name: "Dr. Jane Wilson",
      role: "Endocrinologist",
      bio: "Expert in diabetes management and hormonal disorders.",
      avatar: "https://avatar.iran.liara.run/public/job/doctor/male",
      contactInfo: {
        phone: "(987) 654-3210",
        email: "janewilson@example.com",
      },
    },
    {
      name: "Dr. John Doe",
      role: "General Practitioner",
      bio: "Comprehensive care for all ages.",
      avatar: "https://avatar.iran.liara.run/public/boy",
      contactInfo: {
        phone: "(555) 123-4567",
        email: "johndoe@example.com",
      },
    },
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get posts for the current page
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <UserAuthControl /> */}
      <div className="flex-grow flex">
        {/* <Sidebar /> Sidebar for navigation */}
        <main className="flex-grow p-4">
          {/* Introduction Section */}
          <div className="bg-blue-100 p-8 rounded-lg mb-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to MediConnect</h1>
            <p className="text-lg">
              Connect, share, and get expert advice on health topics from our
              community of doctors, donors, and members.
            </p>
          </div>

          {/* Featured Doctors Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredDoctors.map((doctor, index) => (
                <UserCard key={index} {...doctor} />
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Patient Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <Review key={index} {...review} />
              ))}
            </div>
          </section>

          {/* Posts Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentPosts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
          </section>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
