import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from './categories';
import Message from '../message';

const schema = z.object({
  description: z
    .string()
    .min(3, {
      message: 'Description must be atleast 3 characters',
    })
    .max(20),
  amount: z
    .number({
      invalid_type_error: 'Amount is required',
    })
    .min(1)
    .max(100000),
  category: z.enum(categories),
});

// interface inputData {
//   description: string;
//   amount: number;
//   category: string;
// }

interface props {
  onSubmit: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = (props: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      action="form"
      onSubmit={handleSubmit((data) => {
        props.onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register('description')}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register('amount', {
            valueAsNumber: true,
          })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="" className="form-label"></label>
        <select id="category" className="form-select" {...register('category')}>
          {' '}
          {categories
            .filter((e) => e != 'All')
            .map((category) => (
              <option>{category}</option>
            ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary mb-5">Submit</button>
    </form>
  );
};

export default ExpenseForm;
