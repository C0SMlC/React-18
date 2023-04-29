import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState } = useForm();
  // console.log(formState);

  // const NameRef = useRef<HTMLInputElement>(null);
  // const AgeRef = useRef<HTMLInputElement>(null);
  // const Person = {
  //   name: ' ',
  //   age: 0,
  // };

  // const [property, setProp] = useState({
  //   name: ' ',
  //   age: ' ',
  // });

  // const handleEvent = (e: FormEvent) => {
  //   e.preventDefault();
  //   Person.name = NameRef.current?.value ?? ' ';
  //   Person.age = Number(AgeRef.current?.value) || 10;
  //   console.log(JSON.stringify(Person));
  //   console.log(JSON.stringify(property));
  // };

  const handler = (data: FieldValues) => {
    console.log(
      `The altered data is ${data.Name} and ${data.age} and ${JSON.stringify(
        register('age')
      )}`
    );
  };

  return (
    <form onSubmit={handleSubmit(handler)}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          ///OXOXOXOXOX????
          //   onChange={(e) =>
          //     setProp({
          //       ...property,
          //       name: e.target.value,
          //     })
          //   }
          //   value={property.name}
          ///OXOXOXOXOX????
          {...register('Name', {
            required: true,
            minLength: 3,
          })}
          ///OXOXOXOXOX????

          // ref={NameRef}
          id="Name"
          type="text"
          className="form-control"
        />
        {formState.errors.Name?.type === 'minLength' && (
          <p className="mt-1 text-danger">Minimum length for name is Three</p>
        )}
      </div>

      <div className="mt-4 mb-4">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(e) =>
          //   setProp({
          //     ...property,
          //     age: e.target.value,
          //   })
          // }
          // value={property.age}
          // ref={AgeRef}
          {...register('age', { required: true })}
          id="age"
          type="number"
          className="form-control"
        />

        {formState.errors.age?.type === 'required' && (
          <p className="mt-1 text-danger">Minimum length for name is Three</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
