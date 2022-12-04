// Lib important
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './ComponenteComClasse';


// Tipo: 1
// sintaxe basica para escrever o metedo render()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Tipo: 2
// podemos não usar o metodo <React.StrictMode>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );