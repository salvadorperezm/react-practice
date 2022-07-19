import "./App.css";
import Animal from "./Animal";

function App() {
  const animals = [
    { name: "dog", emoji: "🐶" },
    { name: "cat", emoji: "🐱" },
    { name: "chicken", emoji: "🐔" },
    { name: "cow", emoji: "🐮" },
    { name: "sheep", emoji: "🐑" },
    { name: "horse", emoji: "🐴" },
  ];
  return (
    <div className="animals">
      <h1>React rendered list</h1>
      <Animal props={animals} />
    </div>
  );
}

export default App;
