import { render, screen } from '@testing-library/react';
import Home from '.';

const mockdataObj = {
  "idDrink": "0000",
  "strDrink": "home page test item",
  "strDrinkThumb": "thumb image",
  "category": "test category"
}

const mockdataArray = [mockdataObj]

//Mock custom hook useSearchItemList
jest.mock("../../hooks/useGetItemList", () => {
  return () => [mockdataArray, null]
})

//Mock custom hook useSearchItemList
jest.mock("../../hooks/useSearchItemList", () => {
  return () => [null, null]
})

//Mock custom hook useDeleteFavouriteItem
jest.mock("../../hooks/useDeleteFavouriteItem", () => {
  return () => [null]
})

//Mock custom hook useUpdateFavouriteItemList
jest.mock("../../hooks/useUpdateFavouriteItemList", () => {
  return () => [null, null]
})

test('renders Home page with mocked data', () => {
  render(<Home />);
  const searchButtonElement = screen.getByText('Trending Cocktails');
  const imgElement = screen.getByAltText('shows a card');
  expect(searchButtonElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute("src", "thumb image");
});

