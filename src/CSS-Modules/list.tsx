import React from 'react';
import styles from './list.module.css';

const List = () => {
  return (
    <div>
      <ul className={[styles.listGroup, styles['text-color']].join(' ')}>
        <li>Hii</li>
        <li>Hello</li>
        <li>Hii</li>
        <li>Hello</li>
      </ul>
    </div>
  );
};

export default List;
