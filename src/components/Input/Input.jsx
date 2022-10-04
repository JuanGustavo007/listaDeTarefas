import React from "react";

const Input = ({ handleChange, inputItem, type, value, lista }) => {
  return (
    <input
      onChange={handleChange}
      ref={inputItem}
      type={type}
      value={value}
    ></input>
  );
};

export default Input;
