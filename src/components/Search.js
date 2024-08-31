
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search widgets..."
      value={query}
      onChange={handleInputChange}
      style={{ width: '200px' }} 
    />
  );
};

export default Search;
