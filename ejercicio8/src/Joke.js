import React from "react";
import "./Joke.css";

const Joke = ({ joke }) => {
  return (
    <div className="joke">
      <h2 className="joke__setup">{joke.setup}</h2>
      <p className="joke__punchline">{joke.punchline}</p>
    </div>
  );
};

export default Joke;
