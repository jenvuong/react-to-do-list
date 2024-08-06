import { useEffect, useState } from "react";
import './styles.css'
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export default function App () {
  const [toDoArray, setToDoArray] = useState([])

  function addToDo (newItem) {
    setToDoArray(currentArray => {
      return [
        ...currentArray,
        { id: crypto.randomUUID(), itemName: newItem, completed: false },
      ]
    })
  }

  function deleteToDo (id) {
    setToDoArray(currentArray => {
      return currentArray.filter(todo => todo.id !== id)
    })
  }

  function toggle (id) {
    setToDoArray(currentArray => {
      return currentArray.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
      })
    })
  }

  return (
    <div className="center">
      <ToDoForm addToDo={addToDo}/>
      <ToDoList list={toDoArray} deleteToDo={deleteToDo} toggle={toggle}/>
    </div>
    
  )
}
