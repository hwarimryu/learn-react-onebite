import { useRef, useReducer } from 'react'
import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : true,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래연습하기",
    date : new Date().getTime(),
  }
]

function reducer(todos, action) {
  switch(action.type) {
    case 'CREATE': return [action.data, ...todos]
    case 'UPDATE': return todos.map((todo) => 
      todo.id === action.targetId 
      ? {
          ...todo,
          isDone: !todo.isDone
        }
      : todo
    )
    case 'DELETE': return todos.filter((todo) => todo.id !== action.targetId)
    default : return todos
  }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }});
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId, 
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId})
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate = {onCreate} />
      <TodoList todos = {todos} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  )
}

export default App