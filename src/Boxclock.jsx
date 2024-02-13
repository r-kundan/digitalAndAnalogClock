import React from 'react'
import './Boxclock.scss'
function Boxclock() {
  const boxd = new Date()
  const tarik = boxd.getDate()
  const month = boxd.getMonth()
  const year = boxd.getFullYear()
  return (
    <div id='main'>

      <div className="boxcontainer">
        <div id="date">{tarik}</div>
        <div id="month">{month + 1}</div>
        <div id="year">{year}</div>
      </div>
    </div>
  )
}

export default Boxclock
// import React, { useState, useEffect } from 'react';
// import './App.css';

// const AnalogClock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalID);
//   }, []);

//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   const hourAngle = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
//   const minuteAngle = (minutes + seconds / 60) * 6;
//   const secondAngle = seconds * 6;

//   const hourHandStyle = {
//     transform: `rotate(${hourAngle}deg)`,
//   };

//   const minuteHandStyle = {
//     transform: `rotate(${minuteAngle}deg)`,
//   };

//   const secondHandStyle = {
//     transform: `rotate(${secondAngle}deg)`,
//   };

//   return (
//     <div className="clock">
//       <div className="hand hour-hand" style={hourHandStyle}></div>
//       <div className="hand minute-hand" style={minuteHandStyle}></div>
//       <div className="hand second-hand" style={secondHandStyle}></div>
//     </div>
//   );
// };

// export default AnalogClock;