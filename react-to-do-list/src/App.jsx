import { useEffect, useState } from "react";
import './styles.css'
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App () {
  const [toDoArray, setToDoArray] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(toDoArray))
  }, [toDoArray])

  function addToDo (newItem) {
    setToDoArray(currentArray => {
      return [
        ...currentArray,
        { id: crypto.randomUUID(), itemName: newItem, completed: false },
      ]
    })
  }

  function deleteToDo (id) {
    setToDoArray((currentArray) => {
      return currentArray.filter(todo => todo.id !== id)
    })
  }

  function toggle (id) {
    setToDoArray((currentArray) => {
      return currentArray.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  function clearAll () {
    
    setToDoArray([])
  }

  return (
    <div className="center">
      <ToDoForm addToDo={addToDo}/>
      <ToDoList list={toDoArray} deleteToDo={deleteToDo} toggle={toggle}/>
      <button onClick={clearAll} className="clear-btn"><FontAwesomeIcon icon={faX}/>
        Clear all
      </button>
    </div>
    
  )
}
