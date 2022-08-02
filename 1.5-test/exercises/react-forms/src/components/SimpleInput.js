import {useState, useRef, useEffect} from 'react'

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef()
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('valid name input')
    }

  
  }, [enteredNameIsValid])
  

  const nameInputChangeHandler = (e)=>{
    setEnteredName(e.target.value)

  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return
    }
  }

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched
  

  const formSubmissionHandler = (e)=>{

    e.preventDefault()
    setEnteredNameTouched(true)
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log(enteredName)

    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} onBlur={nameInputBlurHandler} type='text' id='name'  onChange={nameInputChangeHandler}/>
        {! nameInputIsValid && <p>Name must be valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
