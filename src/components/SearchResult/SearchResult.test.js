import { render, screen } from '@testing-library/react';
import SearchResult from '.';

const mockdataObj = {
  "idDrink": "0000",
  "strDrink": "item",
  "strDrinkThumb": "thumb image",
  "category": "test category"
}

//To mock rendering child ItemCard 
const mockItemCardComponent = jest.fn();
jest.mock("../ItemCard", () => (props) => {
  mockItemCardComponent(props);
  return <mock-ItemCardComponent />;
});

//To test a single search result is loaded when passed down with props
test('renders SearchResult Component', () => {
  render(<SearchResult result={[mockdataObj]} />);
  const topicElement = screen.getByText('Search results');
  expect(topicElement).toBeInTheDocument();
});
