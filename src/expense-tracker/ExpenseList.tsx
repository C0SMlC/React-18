import React from 'react';

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

interface Props {
  Expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = (props: Props) => {
  if (props.Expenses.length === 0) {
    return <h2>No Expenses</h2>;
  }

  return (
    <table className="table table-striped table-bordered">
      <thead className="table table-bordered">
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.Expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.title}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => props.onDelete(expense.id)}
              >
                Dismiss
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {props.Expenses.reduce(
              (total, expense) => total + expense.amount,
              0
            ).toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
