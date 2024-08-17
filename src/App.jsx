import { useEffect, useState } from 'react'
import './styles.css'
import './components/modal-style.css'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import Modal from './components/Modal'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App() {
  const [toDoArray, setToDoArray] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [modalStatus, setModalStatus] = useState(false)

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(toDoArray))
  }, [toDoArray])

  function addToDo(newItem) {
    setToDoArray((currentArray) => {
      return [
        ...currentArray,
        {
          id: crypto.randomUUID(),
          itemName: newItem,
          completed: false,
          isEditing: false,
        },
      ]
    })
  }

  function deleteToDo(id) {
    setToDoArray((currentArray) => {
      return currentArray.filter((todo) => todo.id !== id)
    })
  }

  function toggle(id) {
    setToDoArray((currentArray) => {
      return currentArray.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    })
  }

  function clearBtn() {
    if (toDoArray.length !== 0) {
      setModalStatus(true)
    }
    return
  }

  function onConfirm() {
    setModalStatus(false)
    setToDoArray([])
  }

  function onCancel() {
    setModalStatus(false)
    setEditMode(false)
  }

  function onClose() {
    setModalStatus(false)
    setEditMode(false)
  }

  function editTask(id) {
    setToDoArray((currentArray) => {
      return currentArray.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isEditing: !item.isEditing,
          }
        }
        return item
      })
    })
  }

  function editItem(task, id) {
    setToDoArray((currentArray) => {
      return currentArray.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            itemName: task,
            isEditing: !item.isEditing,
          }
        }
        return item
      })
    })
  }

  return (
    <main className="center">
      <img src="svg/cat.svg" alt="cat-icon" id="cat-icon" />
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        list={toDoArray}
        deleteToDo={deleteToDo}
        toggle={toggle}
        editTask={editTask}
        editItem={editItem}
      />
      <button onClick={clearBtn} className="clear-btn">
        <FontAwesomeIcon icon={faX} />
        Clear all
      </button>
      {modalStatus && (
        <Modal onConfirm={onConfirm} onCancel={onCancel} onClose={onClose} />
      )}
    </main>
  )
}
