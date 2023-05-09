import React from "react";

const Button = ({ className, children, ...otherInfo }) => {
  return (
    <button className={className} {...otherInfo}>
      {children}
    </button>
  );
};

export default Button;
