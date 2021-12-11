import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

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
      <InputField addTodo={addTodo} setText={setText} text={text}/>
      <TodoList todos={todos} toogleTodoComplete={toogleTodoComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
