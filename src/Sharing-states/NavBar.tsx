import React from 'react';

interface props {
  countitems: number;
}
const NavBar = (props: props) => {
  return <h1>NavBar: {props.countitems}</h1>;
};

export default NavBar;
