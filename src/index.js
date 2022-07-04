import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/MainContent';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Navbar />
  <Content />
  </>
  
);


