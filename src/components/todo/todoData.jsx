const TodoData = (props) => {
    //props là 1 biến object{}
    // const { name, data } = props
    // const name = props.name
    const { todoList, todoDelete } = props

    const handleClick = (id) => {
        todoDelete(id)
    }
    return (

        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}
                        >Delete
                        </button>
                    </div>
                )

            })}

        </div>
    )
}
export default TodoData