const Header = ({ todos }) => {
  const openTasks = todos.filter((todo) => !todo.complete).length

  return (
    <h1 className='text-3xl font-bold'>
      You have {openTasks} open {openTasks <= 1 ? 'task' : 'tasks'}
    </h1>
  )
}

export default Header
