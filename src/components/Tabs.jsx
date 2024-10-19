const Tabs = ({ todos, selectedTab, setSelectedTab }) => {
  const tabs = ['All', 'Open', 'Complete']

  return (
    <div className='grid items-center grid-cols-3 gap-4 mt-8'>
      {tabs.map((tab) => (
        <button
          className={`btn btn-primary ${tab !== selectedTab && 'btn-outline'}`}
          key={tab}
          onClick={() => setSelectedTab(tab)}
        >
          {tab} (
          {tab === 'All'
            ? todos.length
            : tab === 'Open'
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length}
          )
        </button>
      ))}
    </div>
  )
}

export default Tabs
