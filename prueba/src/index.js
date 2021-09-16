import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss'


import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Route/AppRouter';

ReactDOM.render(
  <BrowserRouter>

    <AppRouter/>

  </BrowserRouter>,
  document.getElementById('root')
);

