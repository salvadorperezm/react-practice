import React from "react";

const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={() => {
          alert(`I am ${onClick}`);
        }}
      >
        {onClick}
      </button>
    </>
  );
};

export default Button;
