const TodoNew = (props) => {
    const { AddNewTodo } = props;
    AddNewTodo("Eric")
    return (

        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )

}
export default TodoNew;