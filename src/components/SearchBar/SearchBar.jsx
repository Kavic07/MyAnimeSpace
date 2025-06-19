import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search for your anime..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
