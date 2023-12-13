import React, { useState, useEffect, useRef } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';


const App = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(false)
  const[flag,setFlag]=useState([])



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

  function flagfun(){
    setFlag((prevflag)=>[...prevflag,show(count)])
  }
  function show(count){
    const min=('0' + Math.floor((count / 60000) % 60)).slice(-2)
    const sec=('0' + Math.floor((count / 1000) % 60)).slice(-2)
    const  msec=(count / 10) % 100
    return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}:${String(msec).padStart(2,'0')}`


  }
  function reset(){
    setCount(0)
    setFlag([])

  }
  

  return (
    <center >
      <div style={{ backgroundColor: "rgb(2, 46, 44)" ,  width:500, marginTop:200,height:500}}>
    <div style={{ backgroundColor: "brown" ,  width:500,}}>
      <div style={{ backgroundColor: 'white', color: "black", marginTop: 100, borderRadius: "50%", border: 34,  margin :88,height:300,paddingTop:34}}>
        
          <h1 style={{ fontSize: 45, paddingTop:30,color:"darkgreen"}} >Countdown</h1>
          <div>
            <span style={{color:"red", fontSize:30}}>{show(count)}</span>
            {/* <span style={{ fontSize: 300 }}>{('0' + Math.floor((count / 60000) % 60)).slice(-2)}:</span>
            <span style={{ fontSize: 300 }}>{('0' + Math.floor((count / 1000) % 60)).slice(-2)}:</span>
            <span style={{ fontSize: 300 }}>{(count / 10) % 100}</span> */}
            {/* <span style={{ fontSize: 300 }} >{(count / 10) % 1000}</span><br></br><br></br> */}
          </div>
          <Button style={{ fontSize: 20, backgroundColor:"white",color:"black"}} variant="success" onClick={() => setTime(true)} >{time?"stop":"start"}</Button>{' '}
          <Button style={{ fontSize: 20, backgroundColor:"white",color:"black"}} variant="primary" onClick={() => setTime(false)} >stop</Button>{' '}
          <Button style={{ fontSize: 20,backgroundColor:"white",color:"black"}} variant="info" onClick={reset}>reset</Button>{' '}
          <Button style={{ fontSize: 20,backgroundColor:"white",color:"black"}} variant="info" onClick={flagfun}>flag</Button>{' '}
          
          
      
      </div>
    </div>
    {flag.map((flag,index)=>(
            <li style={{color:"white"}} key={index}>{flag}</li>
          ))}
          </div>
    </center>
  )
}
export default App;
