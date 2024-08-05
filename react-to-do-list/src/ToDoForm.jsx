export function ToDoForm () {
    return (
        <form>
            <h1>My To Do List.</h1>
            <p>What needs to be done today?</p>
            <div className="input-set">
                <input className='input-box' type="text" placeholder='Start typing...' />
                <button className='add-btn'>Add</button>
            </div>
        </form>
    )
}