
import TodoItem from "./TodoItem"
import "./TodoList.css"
import { useState, useMemo, useContext } from "react"
import { TodoStateContext  } from '../App'

const TodoList = () => {
    const todos  = useContext(TodoStateContext)
    const [search, setSearch] = useState("")
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if(search === "")
            return todos

        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredTodos = getFilteredData();

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount

        return {
            totalCount, doneCount, notDoneCount
        }
    }, [todos])
    // 의존성배열: deps

    return (
        <div className="TodoList">
            <h4>Todo List 🍀</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>not done: {notDoneCount}</div>
            </div>
            <input value = {search} 
            onChange={onChangeSearch} 
            placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper"> 
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo}/>;
                })}
            </div>
        </div>
    )
}

export default TodoList