import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      // eslint-disable-next-line no-undef
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
      <button className="search-btn">Search</button>
    </form>
  );
};

export default SearchBar;
