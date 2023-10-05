import { useState } from 'react'
import './App.css'

function App () {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newbuttonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newbuttonColor)}
        disabled={disabled}
      >
        Change to {newbuttonColor}
      </button>
      <input type='checkbox' 
      defaultChecked={disabled}
      onChange={(e)=> setDisabled(e.target.checked)}
      />
    </>
  )
}

export default App
