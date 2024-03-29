import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      basename="/search-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);