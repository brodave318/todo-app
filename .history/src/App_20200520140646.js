import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo"

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = (e) => {
    console.log("BOOM >", input)

    // 1. Add to todos array
    setTodos([...todos, input])
    // 2. Clear the input field
    setInput("")

    console.log([...todos, input])
  }

  return (
    <div className="App">
      <h1>Todo app</h1>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button onClick={addTodo}>Add Todo</button>
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