import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from "./Todo"
import db from "./firebase"

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // Get data from database
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().title))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault()
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
        <button disabled={!input} type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      {/* Render todos */}
      {todos.map((todo, i) => (
        <Todo title={todo} key={i} />
      ))}
    </div>
  );
}

export default App;
/* state : short term memory
  property : customization of a component to another component */