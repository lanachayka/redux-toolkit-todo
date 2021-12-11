import React from 'react'

export default function InputField({text, handleSubmit, handleInput}) {
    return (
        <label>
            <input value={text} onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}
