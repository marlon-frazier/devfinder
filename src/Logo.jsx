import React, { useState } from "react";
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'

export default function Logo() {
  const [mode, setMode] = useState(true)

  function handleToggle(){
    setMode(!mode)
  }

  return (
    <div className="logo-container">
      <h1 style={{ fontSize: "1.6em", fontWeight: 700 }}>devfinder</h1>
      <div>
        <div className="dark-toggle" onClick={handleToggle}>
            <span style={{fontSize: '.8em', fontWeight: 700, letterSpacing: '.15em'}}>{mode ? 'DARK' : 'LIGHT'}</span>
            {mode ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />}
        </div>
      </div>
    </div>
  );
}
