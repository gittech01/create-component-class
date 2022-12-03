// Lib important
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// basic syntax to write render() method:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );