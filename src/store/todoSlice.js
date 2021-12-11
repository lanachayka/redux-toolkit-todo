import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) { 
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toogleTodoComplete(state, action) {
            const toogledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toogledTodo.completed = !toogledTodo.completed;
        },
    }
});

export const { addTodo, removeTodo, toogleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
