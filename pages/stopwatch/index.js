import React, { useState, useEffect, useRef } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';


const App = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(false)



  useEffect(() => {
    let id = null;
    if (time) {
      id = setInterval(() => {
        setCount(prevcount => prevcount + 10)
      }, 10)

    } else {
      clearInterval(id)
    }
    return () => clearInterval(id)
  }, [time])


  return (
    <div style={{ backgroundColor: "chocolate" }}>
      <div style={{ backgroundColor: 'black', color: "white", marginTop: 100, borderRadius: 1500, border: 34 }}>
        <center>
          <h1 style={{ fontSize: 100 }} >Countdown</h1>
          <div>
            <span style={{ fontSize: 300 }}>{('0' + Math.floor((count / 60000) % 60)).slice(-2)}:</span>
            <span style={{ fontSize: 300 }}>{('0' + Math.floor((count / 1000) % 60)).slice(-2)}:</span>
            <span style={{ fontSize: 300 }}>{(count / 10) % 100}</span>
            {/* <span style={{ fontSize: 300 }} >{(count / 10) % 1000}</span><br></br><br></br> */}
          </div>
          <Button style={{ fontSize: 50 }} variant="success" onClick={() => setTime(true)} >start</Button>{' '}
          <Button style={{ fontSize: 50 }} variant="primary" onClick={() => setTime(false)} >stop</Button>{' '}
          <Button style={{ fontSize: 50 }} variant="info" onClick={() => setCount(0)}>reset</Button>{' '}
        </center>
      </div>
    </div>
  )
}
export default App;