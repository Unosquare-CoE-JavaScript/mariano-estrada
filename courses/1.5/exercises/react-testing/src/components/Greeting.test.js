import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('testing greeting component', () => {
  test('Hello world is rendered', () => {
    render(<Greeting />);

    const helloWorld = screen.getByText('Hello World');
    expect(helloWorld).toBeInTheDocument();
  });
  test('renders Its good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const element = screen.getByText('Its good to see you');
    expect(element).toBeInTheDocument();
  });
  test('renders change text if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const element = screen.getByText('Changed Text');
    expect(element).toBeInTheDocument();
  });

  test('paragrapgh does not render its good to see you if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const element = screen.queryByText('Its good to see you');
    expect(element).toBeNull();
  });
});
