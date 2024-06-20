import React, { useState } from "react";

function FruitFilter() {
  const data = ["apple", "mango", "banana", "orange", "grape"];
  const [fruits, setFruits] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search fruits"
      />
      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitFilter;
