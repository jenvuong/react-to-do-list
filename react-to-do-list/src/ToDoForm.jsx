import { useState } from "react"

export function ToDoForm ({ addToDo }) {
    const [inputState, setInputState] = useState("")
   

    function handleSubmit(e) {
        e.preventDefault()
        
        if (inputState) {
            addToDo(inputState)
        }
        
        setInputState("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>My To Do List.</h1>
            <p>What needs to be done today?</p>
            <div className="input-set">
                <input 
                    value={inputState} 
                    onChange={e => setInputState(e.target.value)} 
                    className='input-box' 
                    type="text" 
                    placeholder='Start typing...'
                    id='taskInput' 
                    maxLength={23}
                />
                <button className='add-btn'>Add</button>
            </div>
        </form>
    )
}