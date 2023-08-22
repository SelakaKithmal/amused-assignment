import { render, screen } from '@testing-library/react';
import App from '.';
import { BrowserRouter as Router } from 'react-router-dom';

//testing whether skeleton works fine when rendered collectively
test('renders App component', () => {
  render(<Router><App /></Router>);
  const headerelement = screen.getByText('Assignment');
  const searchElement = screen.getByText('Scroll Top');

  expect(headerelement).toBeInTheDocument();
  expect(searchElement).toBeInTheDocument();
});
