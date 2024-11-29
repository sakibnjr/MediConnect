import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaPhone, FaCalendarAlt } from "react-icons/fa";

const DoctorProfile = () => {
  const { id } = useParams(); // Get doctor ID from the URL
  const [doctor, setDoctor] = useState(null);

  // Mock data (replace with real API call to fetch doctor profile based on ID)
  useEffect(() => {
    const doctorData = [
      {
        id: 1,
        name: "Dr. Jane Smith",
        specialty: "Cardiologist",
        location: "New York",
        rating: 4.5,
        bio: "Experienced cardiologist with over 10 years of practice. Specializing in heart diseases and treatment.",
        contact: "123-456-7890",
        profileImage: "https://avatar.iran.liara.run/public/job/doctor/male", // Replace with unique URL
        availability: "Mon - Fri, 9:00 AM - 5:00 PM",
        education: "MD, Harvard Medical School",
        experience: "10+ years",
        reviews: [
          {
            reviewer: "John Doe",
            comment: "Great doctor, highly recommended!",
            rating: 5,
          },
          {
            reviewer: "Emily Rose",
            comment: "Very attentive and knowledgeable.",
            rating: 4.5,
          },
        ],
      },
      {
        id: 2,
        name: "Dr. John Doe",
        specialty: "Dermatologist",
        location: "Los Angeles",
        rating: 4.8,
        bio: "Board-certified dermatologist with a passion for helping patients achieve healthy and radiant skin.",
        contact: "987-654-3210",
        profileImage: "https://avatar.iran.liara.run/public/job/doctor/male", // Replace with unique URL
        availability: "Tue - Sat, 10:00 AM - 6:00 PM",
        education: "MD, Stanford University",
        experience: "8 years",
        reviews: [
          {
            reviewer: "Sarah Johnson",
            comment: "Very professional and kind.",
            rating: 4.9,
          },
          {
            reviewer: "Mark Spencer",
            comment: "Helped me with a skin condition I've had for years.",
            rating: 4.8,
          },
        ],
      },
      {
        id: 3,
        name: "Dr. Emily Johnson",
        specialty: "Pediatrician",
        location: "Chicago",
        rating: 4.2,
        bio: "Dedicated pediatrician who loves working with children and ensuring their healthy development.",
        contact: "555-123-4567",
        profileImage: "https://avatar.iran.liara.run/public/job/doctor/female", // Replace with unique URL
        availability: "Mon - Fri, 8:00 AM - 3:00 PM",
        education: "MD, University of Chicago",
        experience: "12 years",
        reviews: [
          {
            reviewer: "Lisa Brown",
            comment: "My kids love her, and so do I!",
            rating: 4.5,
          },
          {
            reviewer: "Tommy Nguyen",
            comment: "Very understanding and patient with children.",
            rating: 4.0,
          },
        ],
      },
    ];

    // Find the doctor matching the ID from the URL
    const selectedDoctor = doctorData.find(
      (doctor) => doctor.id === parseInt(id, 10)
    );

    setDoctor(selectedDoctor);
  }, [id]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <main className="flex-grow p-6 bg-gray-100">
          <div className="bg-white shadow-md rounded-md p-6">
            {/* Doctor's Basic Info */}
            <div className="flex items-center">
              <img
                src={doctor.profileImage}
                alt={`${doctor.name}`}
                className="w-24 h-24 rounded-full shadow-md mr-6"
              />
              <div>
                <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm">{doctor.location}</p>
                <div className="mt-2 flex items-center text-yellow-500">
                  <FaStar className="mr-1" />
                  <span>{doctor.rating}</span>
                </div>
              </div>
            </div>

            {/* Doctor's Additional Details */}
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold">Biography</h3>
                <p className="text-gray-700">{doctor.bio}</p>
              </div>
              <div>
                <h3 className="font-semibold">Contact</h3>
                <p className="flex items-center text-blue-600">
                  <FaPhone className="mr-2" /> {doctor.contact}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Availability</h3>
                <p className="flex items-center text-green-600">
                  <FaCalendarAlt className="mr-2" /> {doctor.availability}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Education</h3>
                <p className="text-gray-700">{doctor.education}</p>
              </div>
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-gray-700">{doctor.experience}</p>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-6">
              <h3 className="font-semibold">Reviews</h3>
              <div className="space-y-4 mt-4">
                {doctor.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-md shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{review.reviewer}</p>
                      <div className="flex items-center text-yellow-500">
                        <FaStar className="mr-1" />
                        <span>{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
                Book an Appointment
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorProfile;
