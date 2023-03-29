import React from "react";
function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search Houses:</label>
        <input className="search"
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;