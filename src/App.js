import React, { useState } from "react";
import "./App.scss";
import "./styling.scss";
import Todo from "./Todo";


function App() {
  const [todos, setTodos] = useState([
    "Go Out for a morning walk",
    "Get Groceries from market",
    "Go to the gym",
  ]);
  const [input, setInput] = useState("");
  const addActivity = (event) => {
    //this will add activity when button is clicked
    event.preventDefault();
    setTodos([...todos, input]);
    setInput(""); //clearing up input field after submitting
  };

  return (
    <div className="App">
      <div className="heading-primary">
        <h1> Todo App </h1>
      </div>

      <div class="form-task">
        <form>
          <input
            className='input-task'
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="What's your Activity ?"
          />
          <button 
            disabled={!input}
            variant="contained" 
            color="primary"
            className='input-task'
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="What's your Activity ?"
          >
          Add an activity
          </button>
        </form>
      </div>

      <div className="task-container">
        <ul className='task-list'>
        {todos.map((todo) => (
          // <li>{todo}</li>
          <Todo text={todo} />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
