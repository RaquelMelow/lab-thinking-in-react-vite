import React from 'react';

function SearchBar({ onSearch, onCheck }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    onSearch(searchTerm);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <div>
        <input
        type='checkBox'
        onChange={onCheck}
        
        />
        <label>Only show products in stock</label>
      </div>
    </div>

  );
}

export default SearchBar;
