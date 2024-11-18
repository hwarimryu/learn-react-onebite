import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'

function App() {
  const nav = useNavigate()

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/new' element={<New />}/>
        <Route path='/diary/:id' element={<Diary />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
