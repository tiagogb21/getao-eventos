import React from 'react';
import './App.css';
import MyProvider from './MyContext/Provider';

import PathRouter from './PathRouter';

function App() {
  return (
    <MyProvider>
      <PathRouter />
    </MyProvider>
  );
}

export default App;
