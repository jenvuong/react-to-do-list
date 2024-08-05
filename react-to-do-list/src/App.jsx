import { useEffect, useState } from "react";
import './styles.css'
import { ToDoForm } from "./ToDoForm";
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToDoList } from "./ToDoList";

export default function App () {
  return (
    <div className="center">
      <ToDoForm />
      <ToDoList />
      <button className="clear-btn"><FontAwesomeIcon icon={faX}/>Clear all</button>
    </div>
    
  )
}
