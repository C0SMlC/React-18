import React from 'react';
import { Categories } from '../App';

interface props {
  onSelectCategeory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategeory }: props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategeory(e.target.value)}
    >
      {Categories.map((Element) => (
        <option>{Element}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
