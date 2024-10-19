import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'

function App() {
  const [todos, setTodos] = useState([
    {
      input: 'Add your first todo',
      complete: false,
    },
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  const handleAddTodo = (newInput) => {
    const newTodoList = [...todos, { input: newInput, complete: false }]
    setTodos(newTodoList)
    handleSaveDate(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveDate(newTodoList)
  }

  const handleCompleteTodo = (index) => {
    const newTodoList = [...todos]
    const completeTodo = todos[index]
    completeTodo.complete = true
    newTodoList[index] = completeTodo
    setTodos(newTodoList)
    handleSaveDate(newTodoList)
  }

  const handleSaveDate = (currTodo) => {
    localStorage.setItem('todo-list', JSON.stringify({ todos: currTodo }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-list')) {
      return
    }

    const db = JSON.parse(localStorage.getItem('todo-list'))
    setTodos(db.todos)
  }, [])

  return (
    <div className='container max-w-5xl mx-auto mt-28'>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </div>
  )
}

export default App
