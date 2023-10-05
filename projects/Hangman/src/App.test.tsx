import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { makeWordProvider } from './lib/wordProvider'

describe('<App />', () => {
  it('should render without crashing', () => {
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )
  })
  it('guesses should reduce by 1 when an incorrect letter is submited', async () => {
    // setup
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )

    // act
    const input = screen.getByLabelText(/Letter/)
    await userEvent.type(input, 'x')

    const button = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(button)

    // assert
    expect(screen.getByText('Guesses left: 4')).toBeDefined()
    expect(screen.getByText('_ _ _')).toBeDefined()
  })

  it('when there is a wrong guess the wrong letter should appear in the wrong guesses section', async () => {
    // setup
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )

    // act
    const input = screen.getByLabelText(/Letter/)
    await userEvent.type(input, 'x')

    const button = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(button)

    // assert
    const wrongGuessElement = screen.getByText('x');
    const hangmanContainer = screen.getByTestId('hangman-container')
    expect(hangmanContainer).toMatchSnapshot()
    expect(wrongGuessElement).toBeDefined();
    expect(screen.getByText('_ _ _')).toBeDefined()
  })


  it('guesses should not reduce by 1 when an correct letter is submited and the correct letter should appear displayed', async () => {
    // setup
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )

    // act
    const input = screen.getByLabelText(/Letter/)
    await userEvent.type(input, 'v')

    const button = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(button)

    // assert
    expect(screen.getByText('Guesses left: 5')).toBeDefined()
    expect(screen.getByText('v _ _')).toBeDefined()
  })

  it('a victory modal should appear when the user guesses the word', async () => {
    // setup
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )

    // act
    const input = screen.getByLabelText(/Letter/)
    await userEvent.type(input, 'v')

    const button = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(button)

    await userEvent.type(input, 'u')
    await userEvent.click(button)

    await userEvent.type(input, 'e')
    await userEvent.click(button)

    // assert
    expect(screen.getByText('Guesses left: 5')).toBeDefined()
    expect(screen.getByText('v u e')).toBeDefined()
    expect(screen.getByText('You Won! Start a new game')).toBeDefined()
  })

  it('Should reset game when new game is clicked', async () => {
    // setup
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )

    // act

    const button = screen.getByRole('button', { name: 'New Game' })
    await userEvent.click(button)

    // assert
    expect(screen.getByText('Guesses left: 5')).toBeDefined()
    expect(screen.getByText('_ _ _')).toBeDefined()
  })

  it('Should reset game when the user lost the game', async () => {
    // setup
    const wordProvider = makeWordProvider()
    const selectedWordIndex = 0
    render(
      <App wordProvider={wordProvider} selectedWordIndex={selectedWordIndex} />
    )

    // act

    const input = screen.getByLabelText(/Letter/)
    await userEvent.type(input, 'x')

    const button = screen.getByRole('button', { name: 'Submit' })
    await userEvent.click(button)

    await userEvent.type(input, 'y')
    await userEvent.click(button)

    await userEvent.type(input, 'z')
    await userEvent.click(button)

    
    await userEvent.type(input, 'b')
    await userEvent.click(button)

    
    await userEvent.type(input, 'p')
    await userEvent.click(button)

    // assert
    expect(screen.getByText('Guesses left: 5')).toBeDefined()
    expect(screen.getByText('_ _ _')).toBeDefined()
  })
})
