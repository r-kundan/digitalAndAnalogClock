import Boxclock from './boxclock'
import './App.css'

function App() {
const hh = document.querySelector("#hour")
const mm = document.querySelector("#min")
const ss = document.querySelector("#sec")
function clock(){
  const date = new Date();
  const htime = date.getHours()
  const mtime = date.getMinutes()
  const stime = date.getSeconds()
   let hrotation = 30*htime + mtime/2;
   let mrotation = 6*mtime;
   let srotation =6*stime;
   hh.style.transform=`rotate(${hrotation}deg)`
   mm.style.transform=`rotate(${mrotation}deg)`
   ss.style.transform=`rotate(${srotation}deg)`

}
setInterval(clock,1000)
return (
    <>
    <div id="container">
      <div id="clock">
            <div className='hand' style={{'--clr':'red' , '--h':"50px"}} id="hour"><i></i></div>
            <div className='hand' style={{'--clr':'green' , '--h':"70px"}} id="min"><i></i></div>
            <div className='hand' style={{'--clr':'white' , '--h':"90px"}} id="sec"><i></i></div>
            
            <span style={{"--i":1}}><b>1</b></span>
            <span style={{"--i":2}}><b>2</b></span>
            <span style={{"--i":3}}><b>3</b></span>
            <span style={{"--i":4}}><b>4</b></span>
            <span style={{"--i":5}}><b>5</b></span>
            <span style={{"--i":6}}><b>6</b></span>
            <span style={{"--i":7}}><b>7</b></span>
            <span style={{"--i":8}}><b>8</b></span>
            <span style={{"--i":9}}><b>9</b></span>
            <span style={{"--i":10}}><b>10</b></span>
            <span style={{"--i":11}}><b>11</b></span>
            <span style={{"--i":12}}><b>12</b></span>
      </div>
    <Boxclock/>
    </div>
    </>
  )
}

export default App
