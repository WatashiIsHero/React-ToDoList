// React 17　以前の書き方
// import ReactDOM from 'react-dom';
import { ToDo } from './ToDo.jsx';
import { createRoot } from 'react-dom/client';
import React from 'react';

const indexElement = document.getElementById('root');
const indexComponent = new createRoot(indexElement);

indexComponent.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);
