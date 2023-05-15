import React, { useRef } from 'react';
interface type {
  id: number;
  name: string;
}

interface props {
  addUser: (data: type) => void;
}
const AddUserForm = (props: props) => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Name = nameRef.current?.value;
    if (Name) {
      const obj = {
        id: 10,
        name: Name,
      };

      props.addUser(obj);
    }
  };
  return (
    <form action="" onSubmit={handlesubmit}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        id="name"
        ref={nameRef}
        placeholder="Enter Name"
        className="mb-3 form-control"
      />
      <button type="submit" className=" mb-5 btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddUserForm;
