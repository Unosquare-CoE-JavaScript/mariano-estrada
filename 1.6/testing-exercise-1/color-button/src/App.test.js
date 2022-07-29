import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App/>)
  //Find an element with the role of button and the name change to blue
 const colorButton = screen.getByRole('button',{name: 'Change to blue'})

  //expect the background to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //click the button

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions',()=>{
  render(<App/>)

  //Check if the button starts enabled
  const colorButton = screen.getByRole('button',{name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  //Check that the checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables button on first click and enables on second click', ()=>{
  render(<App/>)

  const checkbox = screen.getByRole('checkbox')
  const button = screen.getByRole('button')

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})