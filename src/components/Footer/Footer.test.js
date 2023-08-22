import { render, screen } from '@testing-library/react';
import Footer from '.';

test('renders Footer Component', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  
  expect(footerElement).toBeInTheDocument();
});
