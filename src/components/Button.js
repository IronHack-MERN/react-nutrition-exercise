import React from "react";
const Button = ({ children, myProp }) => {
  return (
    <button 
      style={{ margin:15, }}
      className='button  is-link'
      onClick={myProp}>
      {children}
    </button>
  );
};

export default Button;
