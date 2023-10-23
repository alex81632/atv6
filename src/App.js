import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora com React e Redux</h1>
        <main>
          <Calculator />
        </main>
      </header>
      
    </div>
  );
}

export default App;
