import './App.css'
import { useState } from 'react'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"

function App() {
  const [count, setCount] = useState(0)
  const onClickButton = (num) => {
    setCount(count + num)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count} />
      </section>
      <section>
        <Controller onClickButton = {onClickButton} />
      </section>
    </div>
  )
}

export default App
