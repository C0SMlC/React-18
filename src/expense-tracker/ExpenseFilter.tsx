import React from 'react';
import { categories } from './categories';

interface props {
  onSelectCategeory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategeory }: props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategeory(e.target.value)}
    >
      {categories.map((category) => (
        <option>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
