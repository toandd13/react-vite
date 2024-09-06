import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {

  const [todoList, setTodoList] = useState([

  ])

  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }






  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        AddNewTodo={AddNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />
        :
        <div className='todo-img'>
          <img src={reactLogo} />
        </div>
      }

    </div>
  )
}

export default App
