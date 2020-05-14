import React from "react";
const Button = ({ children, myProp }) => {
  return (
    <button 
      classname="button" 
      onClick={myProp}>
      {children}
    </button>
  );
};

export default Button;
