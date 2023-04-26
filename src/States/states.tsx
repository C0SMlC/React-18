import React, { useState } from 'react';
import { produce } from 'immer';

interface props {
  onClick: () => void;
}
const State = (props: props) => {
  //can achieve same thing by doing
  const [count, inCount] = useState({
    discount: 10,
    items: [
      { id: 1, title: 'Item 1', price: 100 },
      { id: 2, title: 'Item 2', price: 200 },
      { id: 3, title: 'Item 3', price: 300 },
    ],
  });

  const handleClick = () => {
    //   inCount({
    //     ...count,
    //     items: count.items.map((item) => {
    //       return item.id === 1 ? { ...item, price: item.price - 10 } : item;
    //     }),
    //   });
    inCount(
      produce((draft) => {
        draft.items = draft.items.map((item) => {
          return item.id === 1 ? { ...item, price: item.price - 10 } : item;
        });
      })
    );
    props.onClick();
  };

  return (
    <div>
      <h1 onClick={handleClick}>{JSON.stringify(count)}</h1>
    </div>
  );
};

export default State;
