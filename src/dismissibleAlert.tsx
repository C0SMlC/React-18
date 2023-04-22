import React from 'react';

interface props {
  children: string;
  onClick: () => void;
}
const DismissibleAlert = ({ children, onClick }: props) => {
  return (
    <div className="alert alert-info" role="alert">
      This is a info alert with{' '}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
        style={{ backgroundColor: 'transparent' }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default DismissibleAlert;
