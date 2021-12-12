import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { addNewTodo, fetchTodos } from './store/todoSlice'

function App() {
  const [text, setText] = useState('');
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  },[dispatch]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField handleSubmit={addTask} handleInput={setText} text={text} />

      {status === 'Loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
