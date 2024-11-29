import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaUserMd, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import DoctorCard from "../components/DoctorCard";
import Button from "../components/Button";

const DoctorSearch = () => {
  const navigate = useNavigate();

  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [suggestions, setSuggestions] = useState({
    specialty: [],
    location: [],
  });

  const specialtiesList = [
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedic",
    "Neurologist",
  ];
  const locationsList = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
  ];

  const allDoctors = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      specialty: "Cardiologist",
      location: "New York",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Dr. John Doe",
      specialty: "Dermatologist",
      location: "Los Angeles",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      location: "Chicago",
      rating: 4.2,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!specialty && !location) {
      toast.error("Please enter at least one search criterion.");
      return;
    }

    const searchQuery = { specialty, location };
    if (
      !recentSearches.some(
        (search) => JSON.stringify(search) === JSON.stringify(searchQuery)
      )
    ) {
      setRecentSearches([searchQuery, ...recentSearches].slice(0, 5)); // Save recent searches (max 5)
    }

    const filteredDoctors = allDoctors.filter(
      (doctor) =>
        (specialty
          ? doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
          : true) &&
        (location
          ? doctor.location.toLowerCase().includes(location.toLowerCase())
          : true)
    );

    if (filteredDoctors.length === 0) {
      toast.info("No doctors found matching your criteria.");
    }

    setDoctors(filteredDoctors);
  };

  const handleDoctorProfile = (doctorId) => {
    navigate(`/doctor-profile/${doctorId}`);
  };

  const handleAutocomplete = (type, value) => {
    const list = type === "specialty" ? specialtiesList : locationsList;
    setSuggestions({
      ...suggestions,
      [type]: list.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      ),
    });
  };

  const handleSelectSuggestion = (type, value) => {
    if (type === "specialty") {
      setSpecialty(value);
    } else {
      setLocation(value);
    }
    setSuggestions({ ...suggestions, [type]: [] }); // Clear suggestions
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-grow p-6 bg-gray-100"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center mb-4">
              <FaSearch className="text-blue-500 text-2xl mr-2" />
              <h2 className="text-2xl font-semibold">Find a Doctor</h2>
            </div>

            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 relative"
            >
              {/* Specialty Input */}
              <div className="relative flex items-center bg-white shadow-md rounded-md p-2 w-full md:w-auto">
                <FaUserMd className="text-gray-500 text-lg mr-2" />
                <input
                  type="text"
                  placeholder="e.g., Cardiologist"
                  value={specialty}
                  onChange={(e) => {
                    setSpecialty(e.target.value);
                    handleAutocomplete("specialty", e.target.value);
                  }}
                  className="outline-none w-full"
                />
                {suggestions.specialty.length > 0 && (
                  <ul className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-full max-h-40 overflow-auto">
                    {suggestions.specialty.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          handleSelectSuggestion("specialty", suggestion)
                        }
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Location Input */}
              <div className="relative flex items-center bg-white shadow-md rounded-md p-2 w-full md:w-auto">
                <FaMapMarkerAlt className="text-gray-500 text-lg mr-2" />
                <input
                  type="text"
                  placeholder="e.g., New York"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    handleAutocomplete("location", e.target.value);
                  }}
                  className="outline-none w-full"
                />
                {suggestions.location.length > 0 && (
                  <ul className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-full max-h-40 overflow-auto">
                    {suggestions.location.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          handleSelectSuggestion("location", suggestion)
                        }
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Button */}
              <Button type="submit" text="Search" />
            </form>
          </motion.div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSpecialty(search.specialty);
                      setLocation(search.location);
                      handleSearch(new Event("submit"));
                    }}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
                  >
                    {search.specialty || "Any Specialty"} -{" "}
                    {search.location || "Any Location"}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Doctors</h3>
            {doctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <motion.div
                    key={doctor.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <DoctorCard
                      name={doctor.name}
                      specialty={doctor.specialty}
                      location={doctor.location}
                      rating={doctor.rating}
                      onClick={() => handleDoctorProfile(doctor.id)}
                    />
                    <div className="mt-2 flex items-center justify-between">
                      <span className="flex items-center text-yellow-500">
                        <FaStar className="mr-1" />
                        {doctor.rating}
                      </span>
                      <Button
                        text="View Profile"
                        className="text-sm"
                        onClick={() => handleDoctorProfile(doctor.id)}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No doctors found matching your criteria.
              </p>
            )}
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
};

export default DoctorSearch;
