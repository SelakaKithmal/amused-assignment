# Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

## Folder Structure

### `components` : Reusable components and tests
### `constants` : Reusable constants used in app
### `hooks` : Custom hooks to ease out the functionalities
### `pages` : Basic ui pages which sync with routes
### `services` : Functions to call BE/Api requests
### `store` : Redux store with Actions and Reducers
### `utils` : Some supporting functions

## Summary on UI
1. Home page lists 5 random Cocktails
2. Refresh button can be used to get new list of 5 fandom cocktails
3. Once user types Cocktail name on Searchbar and press enter, it will list down the matching items; those items contain "Add to favourites" button.
4. When user Clicks "Add to favourites", system checks whether the item is already in the favourites, and avoid duplicate adding.
5. Once user clicks clear button on search, all those search results get cleared
6. User can navigate to the Favourites list from the nav bar link; also can remove items from it.




