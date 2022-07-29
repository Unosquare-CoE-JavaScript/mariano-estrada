import React,{useState} from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newColor  = buttonColor === 'red' ? 'blue' : 'red'

  return (
<div>
  <button style={{backgroundColor: buttonColor}} disabled={disabled} onClick={()=> setButtonColor(newColor)}>Change to {newColor}</button>
  <input type='checkbox' defaultChecked={disabled} aria-checked={disabled} onChange={(e)=> setDisabled(e.target.checked)}/>
</div>
  );
}

export default App;
