import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Homepage from './views/Homepage';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Homepage path="/" />
        <New path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
