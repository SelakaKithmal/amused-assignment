import { render, screen } from '@testing-library/react';
import Header from '.';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Header Component', () => {
  //Need to wrap with Router to prevent useHref exception
  render(<Router><Header /></Router>);
  const headerElement = screen.getByText('Assignment');
  const favouritesElement = screen.getByTestId('favourites-link');

  expect(headerElement).toBeInTheDocument();
  expect(favouritesElement).toBeInTheDocument();
});
