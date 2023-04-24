import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const items = ['HIi', 'Hello', 'Gm', 'GN'];

const Unorderedlist = styled.ul`
  list-style: none;
  width: 100vh;
  padding: 2rem 10rem 2rem 2rem;
`;

const ListItem = styled.li<listprops>`
  color: red;
  padding: 2rem 10rem 2rem 2rem;
  background-color: ${(props) => (props.active ? 'blue' : 'yellow')};
  border-bottom: 2px solid black;
`;

interface listprops {
  active: boolean;
}

const List = () => {
  let [currentIndex, updateIndex] = useState(-1);
  return (
    <Unorderedlist>
      {items.map((item, index) => (
        <ListItem
          onClick={() => updateIndex(index)}
          active={currentIndex === index}
        >
          {item}
        </ListItem>
      ))}
    </Unorderedlist>
  );
};

export default List;
