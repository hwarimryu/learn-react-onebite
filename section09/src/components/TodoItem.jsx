import "./TodoItem.css"
import { memo } from "react"

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id)
    }
    
    const onClickDelete = () => {
        onDelete(id)
    }

    return(
        <div className="TodoItem">
            <input checked={isDone} onChange={onChangeCheckbox} type = "checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default memo(TodoItem, (prevProps, nextProps) => {
    if(prevProps.id !== nextProps.id
        || prevProps.isDone !== nextProps.isDone
        || prevProps.content !== nextProps.content
        || prevProps.date !== nextProps.date)
        return false;

    return true;
});