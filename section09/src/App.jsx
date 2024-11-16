import { useState, useRef } from 'react'
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

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)
  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  }


  return (
    <div className='App'>
      <Header />
      <Editor onCreate = {onCreate} />
      <TodoList />
    </div>
  )
}

export default App
