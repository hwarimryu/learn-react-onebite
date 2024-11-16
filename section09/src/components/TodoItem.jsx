import "./TodoItem.css"

const TodoItem = ({id, isDone, content, date}) => {
    const onChange = () => {

    }
    
    return(
        <div className="TodoItem">
            <input checked={isDone} onChange={onChange} type = "checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;