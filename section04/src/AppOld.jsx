import { useState } from 'react'
import './App.css'
import Header from "./componenets/Header"
import Main from "./componenets/Main"
import Footer from "./componenets/Footer"
import Button from "./componenets/Button"

const Bulb = ({light}) => {
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor: "orange"}}>ON</h1>
      ) : (
        <h1 style={{backgroundColor: "gray"}}>OFF</h1>
      )}
    </div>
  )
}

function AppOld() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
const buttonProps = {
  text:"메일",
  color: "red",
  a:1,
}

  return (
    <>
    <Bulb light = {light}/>
    <button 
    onClick={() => {
      setLight(light === "ON" ? "OFF" : "ON");
    }}>
      {light === "ON" ? "끄기" : "켜기"}
    </button>

    <h1>{count}</h1>
    <button 
    onClick={() => {
      setCount(count + 1);
    }}>
      +
    </button>

    <Header />
    <Main />
    <Button {...buttonProps}/>
    <Button text={"카페"}/>
    <Button text={"블로그"}>
      <div>자식요소</div>
    </Button>
    <Footer />
    </>
  )
}

export default AppOld
