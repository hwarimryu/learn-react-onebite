import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/diary' element={<Diary />}/>
    </Routes>
  )
}

export default App
