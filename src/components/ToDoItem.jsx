import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faTrash,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'

function ToDoItem({ title, id, deleteToDo, toggle, completed, editTask }) {
  return (
    <li className="list-item">
      <span className={completed ? 'span-completed' : ''}>{title}</span>
      <button
        id="done-btn"
        className={`btn ${completed ? 'completed' : ''}`}
        onClick={() => toggle(id)}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button id="trash-btn" className="btn" onClick={() => deleteToDo(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button id="edit-btn" className="btn" onClick={() => editTask(id)}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
    </li>
  )
}

export default ToDoItem
