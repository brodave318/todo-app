import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo"

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <h1>Todo app</h1>
      <input value={input} type="text" />
      <button>Add Todo</button>
      {/* Render from "./Todo" */}
      <Todo title="take dogs out" />
      <Todo title="take dogs out 2" />
      <Todo title="take dogs out 3" />
    </div>
  );
}

export default App;
/* state : short term memory
  property : customization of a component to another component */