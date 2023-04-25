// PASCAL CASING, CAPITAL FIRST LETTER
import { MouseEvent, useState } from 'react';
import { AiFillAlert } from 'react-icons/ai';
import { Fragment } from 'react';
// import { useState } from 'react';

// import bootstrap from 'bootstrap';
// Can use fragment instead of <> </>

interface MessageProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function Message({ items, heading, onSelectItem }: MessageProps) {
  // let selectedIndex = 0;
  let [selectedIndex, updateIndex] = useState(-1);
  // items = [];
  // / Conditional rendering
  // if (items.length === 0) {
  //   return <h1>No item found</h1>;
  // }

  // Parameter 'event' implicitly has an 'any' type.ts(7006)
  // We have to explicitly specify the type of event
  const handleClick = (event: MouseEvent) => {
    console.log(event);
    // console.log(arr);
  };
  const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null;
  };

  return (
    <>
      <h1>
        The List of {heading} {selectedIndex}
      </h1>
      <ul className="list-group">
        {getMessage()}
        {items.length === 0 && <p>No Item Found</p>}

        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index ? 'list-group-item active' : 'item'
            }
            onClick={() => {
              updateIndex(index);
              onSelectItem(item);
            }}
            // onClick={() => (selectedIndex = index)}
          >
            {item}
          </li>
          // Eahc item should have unique in order to react to identufy the item
          // runtime.development.js:87  Warning: Each child in a list should have a unique "key" prop.
          // Check the render method of `Message`. See https://reactjs.org/link/warning-keys for more information.
          //     at li
          //     at Message
          //     at Greeting
          // printWarning @ react-jsx-dev-ru
        ))}
      </ul>
    </>
  );
}

export default Message;
