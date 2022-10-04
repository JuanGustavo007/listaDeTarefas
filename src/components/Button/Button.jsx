import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button className="text-white btn btn-primary" onClick={handleClick}>
      Adicionar
    </button>
  );
};

export default Button;
