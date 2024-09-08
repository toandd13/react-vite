import TodoData from './todoData'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'
import TodoNew from './todoNew'
import './todo.css'
const TodoApp = () => {
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
    )
}
export default TodoApp