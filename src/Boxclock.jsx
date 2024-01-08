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