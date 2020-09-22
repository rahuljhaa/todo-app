import  React, {useState} from 'react';
import './App.scss';
import './styling.scss';

function App() {

const [todos, setTodos] = useState(['Go Out for a morning walk','Get Groceries from market', 'Go to the gym'])
const [input, setInput] = useState('')
const addActivity = (event) =>{ 
  //this will add activity when button is clicked
  event.preventDefault();
  setTodos([...todos,input]);
  setInput(''); //clearing up input field after submitting
}


return(
  <div className="App">
    <h1> Todo App </h1>
    
    <form>
  
    <input value  = {input} onChange={event => setInput(event.target.value)} placeholder="What's your Activity ?"/>
  
    <button disabled={!input} type = "submit" onClick={addActivity} > Add an activity </button>
    </form>

    <ul>
    {todos.map(todo =>(
      <li>{todo}</li>
      ))}
    </ul>

  </div>
  );
}

export default App;