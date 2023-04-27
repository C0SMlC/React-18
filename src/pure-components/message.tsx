import react, { useState } from 'react';
import styled from 'styled-components';

const Message = () => {
  let count = 0;
  count++;
  return <div>Message {count}</div>;
};

export default Message;
