import React, { ReactNode } from 'react';
// import button from './../node_modules/react-bootstrap/Button';

interface props {
  children: ReactNode;
}

const alert = ({ children }: props) => {
  return <div className="alert">{children}</div>;
};

export default alert;
