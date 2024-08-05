export function ToDoForm () {
    return (
        <>
            <h1>My To Do List.</h1>
            <p>What needs to be done today?</p>
            <input className='input-box' type="text" placeholder='Start typing...' />
            <button className='add-btn'>Add</button>
        </>
    )
}