import EditTaskItem from './EditTaskItem'
import ToDoItem from './ToDoItem'

function ToDoList({ list, deleteToDo, toggle, editTask, editItem }) {
  return (
    <ul className="list">
      {list.length === 0 && 'No tasks!'}
      {list.map((todo) => {
        return todo.isEditing ? (
          <EditTaskItem selectedTask={todo} editItem={editItem} />
        ) : (
          <ToDoItem
            id={todo.id}
            title={todo.itemName}
            key={todo.id}
            completed={todo.completed}
            deleteToDo={deleteToDo}
            toggle={toggle}
            editTask={editTask}
          />
        )
      })}
    </ul>
  )
}

export default ToDoList
