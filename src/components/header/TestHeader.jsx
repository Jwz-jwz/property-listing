"use client";
import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // Load search value from localStorage on mount
    const savedSearchValue = localStorage.getItem("searchValue");
    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
    }
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchValue);
    // Optionally save to localStorage on submit
    localStorage.setItem("searchValue", searchValue);
  };

  const handleClear = () => {
    setSearchValue("");
    localStorage.removeItem("searchValue");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
};

export default SearchBar;
