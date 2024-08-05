import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

export function ToDoList () {
    return (
        <ul className="list">
        <li className="list-item">
          <span>Go for a run</span>
          <button className="check btn"><FontAwesomeIcon icon={faCheck}/></button>
          <button className="trash btn"><FontAwesomeIcon icon={faTrash}/></button>
        </li>
        <li className='list-item'>
          <span>Bake cake</span>
          <button className="check btn"><FontAwesomeIcon icon={faCheck}/></button>
          <button className="trash btn"><FontAwesomeIcon icon={faTrash}/></button>
        </li>
      </ul>
    )
}