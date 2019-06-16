import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div class="d-md-flex h-md-100 align-items-center">


        <div class="col-md-6 p-0 bg-indigo h-md-100">
            <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                <div class="logoarea pt-5 pb-5">
                    <h1>Chitty Cherry</h1>
                </div>
            </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
            <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                <form>
                  <input type="text" id="login" class="fadeIn second" name="login" placeholder="invitation Code" />
                  <input type="text" id="password" class="fadeIn third" name="login" placeholder="Name" />
                  <input type="submit" class="fadeIn fourth" value="Join" />
                </form>
            </div>
        </div>
            
        </div>
    </div>
  );
}

export default App;
