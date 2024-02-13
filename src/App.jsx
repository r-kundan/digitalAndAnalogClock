// import Boxclock from './boxclock'
import Boxclock from './Boxclock'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  const hourHandStyle = {
    transform: `rotate(${hourAngle}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${minuteAngle}deg)`,
  };

  const secondHandStyle = {
    transform: `rotate(${secondAngle}deg)`,
  };
  return (
    <>
      <div id="container">
        <div id="clock-con">

          <div className="hand hour-hand" style={hourHandStyle}></div>
          <div className="hand minute-hand" style={minuteHandStyle}></div>
          <div className="hand second-hand" style={secondHandStyle}></div>

          <span style={{ "--i": 1 }}><b>1</b></span>
          <span style={{ "--i": 2 }}><b>2</b></span>
          <span style={{ "--i": 3 }}><b>3</b></span>
          <span style={{ "--i": 4 }}><b>4</b></span>
          <span style={{ "--i": 5 }}><b>5</b></span>
          <span style={{ "--i": 6 }}><b>6</b></span>
          <span style={{ "--i": 7 }}><b>7</b></span>
          <span style={{ "--i": 8 }}><b>8</b></span>
          <span style={{ "--i": 9 }}><b>9</b></span>
          <span style={{ "--i": 10 }}><b>10</b></span>
          <span style={{ "--i": 11 }}><b>11</b></span>
          <span style={{ "--i": 12 }}><b>12</b></span>
        </div>
        
      </div>
    </>
  )
}

export default App