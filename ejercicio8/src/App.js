import "./App.css";
import Joke from "./Joke";

function App() {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div className="App">
      <div className="main-container">
        <h1>React Jokes</h1>
        <div className="jokes-container">
          {jokes.map((joke) => (
            <Joke joke={joke} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
