import { useRef, useReducer, useCallback, createContext, useMemo } from 'react'
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)


  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }});
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId, 
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId})
  }, [])

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  }, [])
  
  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
        <Editor />
        <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App