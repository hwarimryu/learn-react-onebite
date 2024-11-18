import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <div>공통요소</div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/new' element={<New />}/>
        <Route path='/diary' element={<Diary />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
