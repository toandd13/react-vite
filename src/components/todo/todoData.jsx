const TodoData = (props) => {
    //props là 1 biến object{}
    // const { name, data } = props
    const name = props.name
    return (

        <div className="todo-data">
            <div>My Name is {name}</div>
            <div>Leaning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData