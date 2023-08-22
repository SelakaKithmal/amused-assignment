import { render, screen } from '@testing-library/react';
import ItemCard from '.';
import { FAVOURITES, SEARCH_RESULT } from '../../constants/item-card-types';

//To mock triggering custom hook useDeleteFavouriteItem
jest.mock("../../hooks/useDeleteFavouriteItem", () => {
  return () => [null]
})

//To mock triggering custom hook useUpdateFavouriteItemList
jest.mock("../../hooks/useUpdateFavouriteItemList", () => {
  return () => [null, null]
})

test('renders ItemCard Component', () => {
  render(<ItemCard itemid="0000" cardname="TestCardName" cardimage="thumb image" cardcategory="TestCategory" type={SEARCH_RESULT} />);
  const cardElement = screen.getByText('TestCardName');
  const iconElement = screen.getByTestId('favourite-icon');
  const cardImage = screen.getByAltText('shows a card');
  expect(iconElement).toBeInTheDocument();
  expect(cardImage).toHaveAttribute("src", "thumb image");
  expect(cardElement).toBeInTheDocument();
});

test('renders ItemCard Component for Favourites', () => {
  render(<ItemCard itemid="1111" cardname="TestCardName2" cardimage="thumb image2" cardcategory="TestCategory2" type={FAVOURITES} />);
  const cardElement = screen.getByText('Remove From Favourites');
  expect(cardElement).toHaveAttribute("type", "button");
});
