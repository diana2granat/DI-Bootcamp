// "src/CategorySelector.js"
import React from 'react';
import { useSelector } from 'react-redux';

const CategorySelector = ({ onSelectCategory }) => {
  const categories = useSelector(state => state.categories);

  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
