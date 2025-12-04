import { useState } from 'react'
import './App.css'
import Rechner from './Calculator/Rechner.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Rechner />
      
      </div>
   
    </>
  )
}

export default App