import { useState } from 'react'

function EditTaskItem({ editItem, selectedTask }) {
  const [inputState, setInputState] = useState(selectedTask.itemName)

  function handleSubmit(e) {
    e.preventDefault()

    if (inputState) {
      editItem(inputState, selectedTask.id)
    }

    setInputState('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-set">
        <input
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          className="edit-input-box"
          type="text"
          placeholder="Start typing..."
          id="editInput"
          maxLength={35}
        />
        <button className="add-btn">Update</button>
      </div>
    </form>
  )
}

export default EditTaskItem
