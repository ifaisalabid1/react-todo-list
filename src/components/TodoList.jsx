import TodoCard from './TodoCard'

const TodoList = ({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const filteredTodos =
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Open'
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete)

  return (
    <section className='grid grid-cols-1 gap-6 mt-8'>
      {filteredTodos.map((todo, todoIndex) => (
        <TodoCard
          todo={todo}
          key={todoIndex}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          todoIndex={todos.findIndex((val) => val.input == todo.input)}
        />
      ))}
    </section>
  )
}

export default TodoList
