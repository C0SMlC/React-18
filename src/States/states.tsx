import React, { useState } from 'react';
import { produce } from 'immer';
import styled from 'styled-components';

const Clickbutton = styled.button`
  background-color: #f06292;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    background-color: #e91e63;
  }
`;

interface props {
  onClick: () => void;
}
const State = (props: props) => {
  //can achieve same thing by doing
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'New York',
      state: 'NY',
    },
  });

  const handleClick = () => {
    //   inCount({
    //     ...count,
    //     items: count.items.map((item) => {
    //       return item.id === 1 ? { ...item, price: item.price - 10 } : item;
    //     }),
    //   });
    // inCount(
    //   produce((draft) => {
    //     draft.items = draft.items.map((item) => {
    //       return item.id === 1 ? { ...item, price: item.price - 10 } : item;
    //     });
    //   })
    // );

    // Modifies original object
    // setCustomer(
    //   produce((draft) => {
    //     draft.address.state = 'LA';
    //   })
    // );

    //copy
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        state: 'LA',
      },
    });
    props.onClick();
  };

  return (
    <div>
      <h1>
        Customer name {customer.name} And state is {customer.address.state}
      </h1>
      <Clickbutton onClick={handleClick}>Click Here</Clickbutton>
    </div>
  );
};

export default State;
