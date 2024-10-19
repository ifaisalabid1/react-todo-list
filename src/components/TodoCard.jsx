const TodoCard = ({
  todo,
  handleDeleteTodo,
  todoIndex,
  handleCompleteTodo,
}) => {
  return (
    <div className='px-6 py-4 rounded-lg bg-primary text-primary-content'>
      <p className='text-lg'>{todo.input}</p>

      <div className='flex items-center justify-end gap-2 mt-4'>
        <button
          className='btn btn-sm btn-success'
          disabled={todo.complete}
          onClick={() => handleCompleteTodo(todoIndex)}
        >
          Done
        </button>
        <button
          className='btn btn-sm btn-error'
          onClick={() => {
            handleDeleteTodo(todoIndex)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoCard
