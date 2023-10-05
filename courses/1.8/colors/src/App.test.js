import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

});

test('button turns blue when clicked', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  expect(colorButton).toHaveTextContent('Change to red')
});

test('initial conditions', ()=>{
  render(<App/>)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables on first click and enables on second click', ()=>{
  render(<App/>)

  const button = screen.getByRole('button', {name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(button).toBeDisabled ()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})