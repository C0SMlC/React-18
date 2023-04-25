import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styles from './Like.module.css';

interface props {
  //   active: boolean;
  onClick: () => void;
}
const Like = (props: props) => {
  let [color, setColor] = useState('white');
  let [status, setStatus] = useState(true);

  const handleLike = () => {
    status ? setStatus(false) : setStatus(true);
    console.log(status);
    if (status) {
      setColor('red');
    } else {
      setColor('white');
    }
    props.onClick();
  };

  return (
    <div>
      <h1 className={styles.like}>Hiii</h1>
      <AiFillHeart size={134} color={color} onClick={handleLike} />
    </div>
  );
};

export default Like;
