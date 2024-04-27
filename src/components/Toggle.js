import React from "react";
import { useState } from "react";

function Toggle() {

  //initialising state
  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  const color = isOn? "black" : "white";
  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
