import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo"

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = (e) => {
    // Add to todos array
    setTodos([...todos, input])
    // Clear the input field
    setInput("")
  }

  return (
    <div className="App">
      <h1>Todo app</h1>

      <form>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      {/* Render todos */}
      {todos.map(todo => (
        <Todo title={todo} />
      ))}
    </div>
  );
}

export default App;
/* state : short term memory
  property : customization of a component to another component */