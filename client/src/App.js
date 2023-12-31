import React from 'react';
import logo from './assets/imtusar.png';
import './App.css';
import './ComingSoon.css'; // Import the new CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="coming-soon-container">
          <h1>Coming Soon</h1>
          <div className="loader"></div>
        </div>
      </header>
      <footer className="footer">
        <p>Developed by Northino Tech Solutions</p>
        <p>&copy; Imtusar. All rights reserved. 2023</p>
      </footer>
    </div>
  );
}

export default App;
