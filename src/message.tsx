// PASCAL CASING, CAPITAL FIRST LETTER

import { Fragment } from 'react';
// Can use fragment instead of <> </>
function Message() {
  return (
    <>
      <h1>The List of greeting message</h1>
      <ul className="unorderedList">
        <li className="item">Hello</li>
        <li className="item">Hii</li>
        <li className="item">Good Morning</li>
        <li className="item">Good Evening</li>
      </ul>
    </>
  );
}

export default Message;
