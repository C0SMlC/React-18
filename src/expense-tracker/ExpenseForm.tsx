import React from 'react';
import { Categories } from '../App';

interface props {
  onSubmit: () => void;
}

const ExpenseForm = () => {
  return (
    <form action="form">
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Description
        </label>
        <input id="Description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label"></label>
        <select id="category" className="form-select">
          {' '}
          {Categories.map((category) => (
            <option>{category}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary mb-5">Submit</button>
    </form>
  );
};

export default ExpenseForm;
