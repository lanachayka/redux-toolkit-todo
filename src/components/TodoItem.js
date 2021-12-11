import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toogleTodoComplete } from '../store/todoSlice';

export default function TodoItem({ id, completed, text }) {
    const dispatch = useDispatch();
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toogleTodoComplete({ id: id }))}>
            </input>
            <span>{text}</span>
            <span className='delete' onClick={() => dispatch(removeTodo({ id: id }))}>&times;</span>
        </li>
    )
}
