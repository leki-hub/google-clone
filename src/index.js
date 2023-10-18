import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SearchProvider } from './searchProvider';
import reducer, { initialState } from './reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider initialState={initialState} reducer={reducer} >
    <App />
  </SearchProvider>
);
