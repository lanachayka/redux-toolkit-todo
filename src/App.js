import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { addTodo } from './store/todoSlice'

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text: text }));
      setText('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField handleSubmit={addTask} handleInput={setText} text={text}/>
      <TodoList />
    </div>
  );
}

export default App;
