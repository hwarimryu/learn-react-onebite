// import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className='App'>
      <Header />
      <Editor />
      <TodoList />
    </div>
  )
}

export default App
