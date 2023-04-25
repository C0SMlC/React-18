import React, { useState } from 'react';
import styles from './button.module.css';

interface props {
  onClick: () => void;
  text: string;
}

const Button = (props: props) => {
  const [text, setText] = useState(props.text);

  const handleClick = () => {
    setText('Button clicked!');
    props.onClick();
  };

  return (
    <div>
      <h1 >{text}</h1>
      <button className={styles.btn} onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default Button;
