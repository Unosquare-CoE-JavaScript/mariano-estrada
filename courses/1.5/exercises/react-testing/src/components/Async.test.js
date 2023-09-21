import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('testing async code', () => {
  test('renders posts', async () => {
    render(<Async />);

    const li = await screen.findAllByRole('listitem');
    expect(li).not.toHaveLength(0);
  });
});
