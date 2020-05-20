import React from 'react';
import './App.css';
import Todo from "./Todo"

function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>
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