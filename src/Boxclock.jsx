import React, { useEffect } from "react";
import "./Boxclock.scss";
function Boxclock() {
  const today = new Date();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = today.getDay();
  let hour = today.getHours();
  hour = hour >= 12 ? hour - 12 : hour;
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = hour >= 12 ? " AM " : " PM ";
  return (
    <div id="main">
<div className="main-2">

<div className="day">
        <h2>Today is :- {daylist[day]} </h2>
      </div>
<hr />      <div className="time">
        <h3>
          Current Time :- {hour}
          {prepand}: {minute} : {second}
        </h3>
      </div>
</div>

    </div>
  );
}

export default Boxclock;
