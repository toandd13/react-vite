const TodoData = (props) => {
    //props là 1 biến object{}
    // const { name, data } = props
    // const name = props.name
    const { TodoData } = props
    return (

        <div className="todo-data">
            <div>My Name is {props.name}</div>
            <div>Leaning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData