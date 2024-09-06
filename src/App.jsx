import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import TodoNew from './components/todo/todoNew'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
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

  const todoDelete = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);

  }


  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          AddNewTodo={AddNewTodo}
        />

        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            todoDelete={todoDelete}
          />
          :
          <div className='todo-img'>
            <img src={reactLogo} />
          </div>
        }


      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
