import React from 'react'

export default function TodoItem(props) {
    return (
        <li key={props.todo.id}>
            <input type="checkbox" checked={props.todo.completed} onChange={() => props.toogleTodoComplete(props.todo.id)}></input>
            <span>{props.todo.text}</span>
            <span className='delete' onClick={() => props.removeTodo(props.todo.id)}>&times;</span>
        </li>
    )
}
