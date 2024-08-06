import { ToDoItem } from './ToDoItem'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ToDoList ({ list, deleteToDo, toggle }) {
    return (
      <>
        <ul className="list">
          {list.map(todo => {
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
      <button className="clear-btn"><FontAwesomeIcon icon={faX}/>Clear all</button>
    </>
    )
   
}