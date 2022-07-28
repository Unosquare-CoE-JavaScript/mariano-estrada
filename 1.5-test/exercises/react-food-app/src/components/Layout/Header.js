import React from 'react'
import meals from '../asssets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>React Food</h1>
            <HeaderCartButton onClick ={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt='...'/>
        </div>
    </>
  )
}

export default Header