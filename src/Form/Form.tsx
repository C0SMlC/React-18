import React, { FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit } = useForm();

  const NameRef = useRef<HTMLInputElement>(null);
  const AgeRef = useRef<HTMLInputElement>(null);
  const Person = {
    name: ' ',
    age: 0,
  };

  const [property, setProp] = useState({
    name: ' ',
    age: ' ',
  });

  const handleEvent = (e: FormEvent) => {
    e.preventDefault();
    Person.name = NameRef.current?.value ?? ' ';
    Person.age = Number(AgeRef.current?.value) || 10;
    console.log(JSON.stringify(Person));
    console.log(JSON.stringify(property));
  };
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
          {...register('Name')}
          ///OXOXOXOXOX????

          ref={NameRef}
          id="Name"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) =>
            setProp({
              ...property,
              age: e.target.value,
            })
          }
          value={property.age}
          ref={AgeRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
