import React from 'react'

export default function InputField(props) {
    return (
        <label>
            <input value={props.text} onChange={(e) => props.setText(e.target.value)} />
            <button onClick={props.addTodo}>Add Todo</button>
        </label>
    )
}
