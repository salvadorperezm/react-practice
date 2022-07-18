import "./App.css";

function App() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="animals">
      <h1>List of animals with Declarative Programming using React</h1>
      <ul>
        {animals.map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
