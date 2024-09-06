import { useState } from "react";

const TodoNew = (props) => {
    //userState hook(getter setter)
    const [valueInput, setValueInput] = useState("Eric")
    // AddNewTodo("Eric")

    const { AddNewTodo } = props;

    const handleClick = () => {
        AddNewTodo(valueInput)
        setValueInput("")

    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (

        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}

            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>My text input is {valueInput}</div>
        </div>
    )

}
export default TodoNew;