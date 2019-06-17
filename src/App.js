import React from 'react';
import Form from './Components/Form/'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row align-items-center">
        <div className="sec1 col d-flex align-content-center flex-wrap" >
          <h1>Chitty Cherry</h1>
        </div>
        <div className="sec2 col d-flex align-content-center flex-wrap" ><Form/></div>
      </div>
    </div>
  );
}

export default App;
