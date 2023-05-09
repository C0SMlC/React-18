import React from 'react';

interface props {
  onSelectCategeory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategeory }: props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategeory(e.target.value)}
    >
      <option>All Categories</option>
      <option>Food</option>
      <option>Travel</option>
      <option>Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
