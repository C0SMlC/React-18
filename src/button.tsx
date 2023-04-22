import React from 'react';
import button from './../node_modules/react-bootstrap/Button';

interface props {
  children: string;
  onBtnClick: () => void;
}
const Button = ({ children, onBtnClick }: props) => {
  return (
    <button className={'btn btn-' + children} onClick={onBtnClick}>
      Button
    </button>
  );
};

export default Button;
