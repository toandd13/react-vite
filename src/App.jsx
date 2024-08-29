import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg'
const App = () => {

  const AddNewTodo = (name) => {
    alert(`call me ${name}`)
  }


  const name = "David";
  const data = {
    name: "Toàn",
    age: 20
  }



  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        AddNewTodo={AddNewTodo}
      />
      <TodoData
        name={name}
        data={data}
      />
      <div className='todo-img'>
        <img src={reactLogo} />
      </div>
    </div>
  )
}

export default App
