import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/react-hook-/i);
  expect(titleElement).toBeInTheDocument();
});
