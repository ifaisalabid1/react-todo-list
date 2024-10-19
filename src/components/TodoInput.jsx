import { Icon } from '@iconify/react'
import { useState } from 'react'

const TodoInput = ({ handleAddTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const [newInput, setNewInput] = useState('')

  return (
    <form className='flex items-center gap-2 mt-12' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add your task here...'
        className='w-full input input-bordered input-primary'
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />

      <button
        className='text-2xl btn btn-success'
        onClick={() => {
          if (!newInput) {
            return
          }

          handleAddTodo(newInput)
          setNewInput('')
        }}
      >
        <Icon icon='ic:baseline-plus' />
      </button>
    </form>
  )
}

export default TodoInput
