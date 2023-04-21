import React, { ReactNode } from 'react';

interface props {
  children: ReactNode;
}

const alert = ({ children }: props) => {
  return <div className="alert">{children}</div>;
};

export default alert;
