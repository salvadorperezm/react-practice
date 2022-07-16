import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        type="button"
        className="button"
        onClick={() => {
          alert("Clicked!");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
