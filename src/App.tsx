import React from 'react';

import Sidebar from './widgets/Sidebar/Sidebar';
import Customers from './pages/Customers/Customers';

import "./index.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Customers />
    </div>
  );
}

export default App;
