import { useState } from 'react'
import './App.css'
import Range from './components/Range'
import './index.css'
import { useEffect } from 'react'

function App() {
  const [red , setRed] = useState(0)
  const [green,  setGreen] = useState(0)
  const [blue , setBlue] = useState(0)

  useEffect(() => {
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }, [red, green, blue]);


  return (
    <div className='container-fluid'>
      <div className='flex flex-col text-sm gap-x-2  range'>
        <Range value={red} setValue={setRed} color="RED"/>
        <Range value={green} setValue={setGreen}color="GREEN"/>
        <Range value={blue} setValue={setBlue}color="BLUE"/>
      </div>
    </div>
  )
}

export default App
