import React from "react";
import "./Animal.css";

const Animal = ({ props }) => {
  return (
    <ul>
      {props.map((animal) => {
        return (
          <li key={animal.name}>
            {animal.name} {animal.emoji}
          </li>
        );
      })}
    </ul>
  );
};

export default Animal;
