import { render, screen } from '@testing-library/react';
import SearchBar from '.';

//To mock triggering custom hook useSearchItemList
jest.mock("../../hooks/useSearchItemList", () => {
  return () => [null, null]
})

//To mock rendering child SearchResult 
const mockSearchResultComponent = jest.fn();
jest.mock("../SearchResult", () => (props) => {
  mockSearchResultComponent(props);
  return <mock-SearchResultComponent />;
});

test('renders SearchBar Component', () => {
  render(<SearchBar />);
  const searchButtonElement = screen.getByTestId('search-button');
  expect(searchButtonElement).toBeInTheDocument();
});
