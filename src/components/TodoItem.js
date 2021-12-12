import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toogleStatus } from '../store/todoSlice';

export default function TodoItem({ id, completed, title }) {
    const dispatch = useDispatch();
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toogleStatus(id))}>
            </input>
            <span>{title}</span>
            <span className='delete' onClick={() => dispatch(deleteTodo(id))}>&times;</span>
        </li>
    )
}
