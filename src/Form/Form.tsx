import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  Name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  age: z
    .number({
      invalid_type_error: '*Age is required',
    })
    .min(18, { message: 'Age must be at least 18' }),
  // message: z.string(),
});

type formData = z.infer<typeof schema>;

// interface fornData {
//   Name: string;
//   age: number;
// }

const Form = () => {
  const { register, handleSubmit, formState } = useForm<formData>({
    resolver: zodResolver(schema),
  });
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
          {...register('Name')}
          ///OXOXOXOXOX????

          // ref={NameRef}
          id="Name"
          type="text"
          className="form-control"
        />
        {formState.errors.Name && (
          <p className="mt-1 text-danger">{formState.errors.Name.message}</p>
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
          {...register('age', {
            valueAsNumber: true,
          })}
          id="age"
          type="number"
          className="form-control"
        />

        {formState.errors.age && (
          <p className="mt-1 text-danger">{formState.errors.age.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
