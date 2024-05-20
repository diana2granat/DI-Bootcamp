import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';
import BookList from './BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BookList />
  </Provider>
);

reportWebVitals();