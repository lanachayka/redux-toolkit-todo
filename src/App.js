import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text: text,
          completed: false
        }
      ]);
      setText('');
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toogleTodoComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>
      <ul>
        {todos.map(todo => <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={()=>toogleTodoComplete(todo.id)}></input>
          <span>{todo.text}</span>
          <span className='delete' onClick={()=>removeTodo(todo.id)}>&times;</span>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
