import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', 
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            return data;

        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                { method : 'DELETE' }
            );

            if (!response.ok) {
                throw new Error('Can`t delete task. Server Error.');
            }

            dispatch(removeTodo({ id: id }));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    
    }
);

export const toogleStatus = createAsyncThunk(
    'todos/toogleStatus',
    async function (id, { rejectWithValue, dispatch, getState }) {

        const todo = getState().todos.todos.find(todo => todo.id === id);

        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({
                        completed: !todo.completed,
                    })
                }
            );

            if (!response.ok) {
                throw new Error('Can`t toogle status. Server Error.');
            };

            dispatch(toogleTodoComplete({ id: id }));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (title, { rejectWithValue, dispatch }) {
        try {
            const todo = {
                userId: 1,
                title: title,
                completed: false
            }

            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (!response.ok) {
                throw new Error('Can`t add task. Server Error.');
            };

            const data = await response.json();

            dispatch(addTodo(data));
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        status: null,
        error: null
    },
    reducers: {
        addTodo(state, action) { 
            state.todos.push(action.payload);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toogleTodoComplete(state, action) {
            const toogledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toogledTodo.completed = !toogledTodo.completed;
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'Loading';
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => { 
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toogleStatus.rejected]: setError,
        [addNewTodo.rejected]: setError,
    }
});

const { addTodo, removeTodo, toogleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
