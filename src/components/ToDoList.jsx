import ToDoItem from './ToDoItem'

function ToDoList({ list, deleteToDo, toggle }) {
  return (
    <>
      <ul className="list">
        {list.length === 0 && 'No tasks'}
        {list.map((todo) => {
          return (
            <ToDoItem
              id={todo.id}
              title={todo.itemName}
              key={todo.id}
              completed={todo.completed}
              deleteToDo={deleteToDo}
              toggle={toggle}
            />
          )
        })}
      </ul>
    </>
  )
}

export default ToDoList
