import React from 'react';

const ExpenseForm = () => {
  return (
    <form action="">
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
      <div className="mb-3">
        <label htmlFor="" className="form-label"></label>
        <select id="category" className="form-select"></select>
      </div>
    </form>
  );
};

export default ExpenseForm;
