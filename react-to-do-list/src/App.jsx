import { useEffect, useState } from "react";
import './styles.css'
import { ToDoForm } from "./ToDoForm";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App () {
  return (
    <div className="center">
      <ToDoForm />
      <ul>
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
    </div>
    
  )
}
