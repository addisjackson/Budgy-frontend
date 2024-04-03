import React, { useState } from 'react';

function SearchExpense({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    handleSearch(searchTerm); // Pass the search term to the parent component's handleSearch function
  };

 

  return (
    <div className="search-expense">
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchExpense;
