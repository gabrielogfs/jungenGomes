import { useState } from 'react'
import './App.css'

function App() {
  const handleClick = () => {
    alert("Em breve este será um e-commerce.");
  };

  return (
    <div style={{ backgroundColor: '#FFF', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Jungen</h1>
      <button onClick={handleClick}>
        Você está preparado?
      </button>
    </div>
  );
}

export default App
