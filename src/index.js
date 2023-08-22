import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import reducers from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))}>
    <React.StrictMode>
      <BrowserRouter>   <Routes>
        <Route path="/" element={<App />}>
          <Route path="favourites" element={<Favourites />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes></BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
