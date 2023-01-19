import React from "react";

const Button = ({
  className = "k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary",
  onClick,
  style,
  label = "Submit",
  type = "submit",
}) => {
  return (
    <button className={className} onClick={onClick} style={style} type={type}>
      {label}
    </button>
  );
};

export default Button;
