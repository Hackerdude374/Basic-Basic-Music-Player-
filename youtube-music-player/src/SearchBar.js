// src/SearchBar.js
import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
