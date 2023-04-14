// PASCAL CASING, CAPITAL FIRST LETTER

import { Fragment } from 'react';
// Can use fragment instead of <> </>
function Message() {
  let items = [
    'New York',
    'Delhi',
    'Mumbai',
    'San Francisco',
    'Tokyo',
    'Sydeny',
  ];
  items = [];
  // / Conditional rendering
  // if (items.length === 0) {
  //   return <h1>No item found</h1>;
  // }
  const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null;
  };

  return (
    <>
      <h1>The List of greeting message</h1>
      <ul className="unorderedList">
        {getMessage()}
        {items.length === 0 && <p>No Item Found</p>}

        {items.map((item) => (
          <li key={item} className="item">
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
