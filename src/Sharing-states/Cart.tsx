import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

interface props {
  cartitems: string[];
  onClear: (id: string) => void;
}

const Cart = (props: props) => {
  return (
    <>
      <h2>Cart</h2>
      <ul>
        {props.cartitems.map((item) => {
          return (
            <li>
              {item}
              <button
                className="btn"
                key={item}
                onClick={() => props.onClear(item)}
              >
                Clear
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
