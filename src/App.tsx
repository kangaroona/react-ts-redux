import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Todo from "./features/todos/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <Counter />
      </header>
    </div>
  );
}

export default App;
