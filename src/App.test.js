import { render, screen } from '@testing-library/react';
import Country from './useState/Country.js';

test('renders learn react link', () => {
  render(<Country />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
