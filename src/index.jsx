import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './AppRouters';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

