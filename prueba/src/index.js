import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Route/AppRouter';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

