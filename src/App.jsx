import { useState } from 'react'
import './App.css'
import Rechner from './Calculator/Rechner.jsx'

import Galaxy from './Background/Galaxy.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Galaxy />
      
      <div>
        <Rechner />
      </div>
    </>
  )
}

export default App