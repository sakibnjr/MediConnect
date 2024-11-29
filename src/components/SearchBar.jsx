import React, { useState } from "react";

const SearchBar = ({ onSearch, filters = [] }) => {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filters[0] || "");

  const handleSearch = () => {
    onSearch({ query, selectedFilter });
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-base-200 rounded-md">
      {/* Search Input */}
      <input
        type="text"
        className="input input-bordered flex-1"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filters Dropdown */}
      {filters.length > 0 && (
        <select
          className="select select-bordered"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      )}

      {/* Search Button */}
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
