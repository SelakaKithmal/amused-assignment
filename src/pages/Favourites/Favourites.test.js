import { render, screen } from '@testing-library/react';
import Favourites from '.';

const mockdataObj = {
  "idDrink": "0000",
  "strDrink": "Favourite item",
  "strDrinkThumb": "thumb image",
  "category": "test category"
}

const mockdataArray = [mockdataObj]

//Mock custom hook useDeleteFavouriteItem
jest.mock("../../hooks/useDeleteFavouriteItem", () => {
  return () => [null]
})

//Mock custom hook useUpdateFavouriteItemList
jest.mock("../../hooks/useUpdateFavouriteItemList", () => {
  return () => [mockdataArray, null]
})

test('renders Favourites page with mocked data', () => {
  render(<Favourites />);
  const searchButtonElement = screen.getByText('Favourite item');
  const cardElement = screen.getByText('Remove From Favourites');
  expect(searchButtonElement).toBeInTheDocument();
  expect(cardElement).toBeInTheDocument();
});
