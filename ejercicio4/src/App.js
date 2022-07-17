import React, { useState } from "react";
import "./App.css";

function App() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  return (
    <div className="App">
      <h1>You have clicked the Add button {counter} times</h1>
      <div className="btn-container">
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(initialState)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
