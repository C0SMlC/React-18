import React from 'react';
import button from './../node_modules/react-bootstrap/Button';

interface props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onBtnClick: () => void;
}
const Button = ({ children, onBtnClick, color }: props) => {
  return (
    <button className={'btn btn-' + color} onClick={onBtnClick}>
      {children}
    </button>
  );
};

export default Button;
