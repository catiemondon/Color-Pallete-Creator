import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SelectedColors from './Components/SelectedColors/SelectedColors';
import ColorDisplay from './Components/Colors/ColorDisplay/ColorDisplay';

function App() {
  return (
    <div className="App">
      <Header />
      <SelectedColors />
      <ColorDisplay />
    </div>
  );
}

export default App;
