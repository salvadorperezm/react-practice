import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="app-container">
      <h1>React Form</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (name === "" || lastName === "") {
            alert("Verify your data");
          } else {
            alert(`Hello ${name} ${lastName}`);
          }
        }}
      >
        <label htmlFor="nameImput">
          Input your name
          <input
            type="text"
            id="nameImput"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="lastNameInput">
          Input your last name
          <input
            type="text"
            id="lastNameInput"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          ></input>
        </label>
        <button>Greet me!</button>
      </form>
    </div>
  );
}

export default App;
